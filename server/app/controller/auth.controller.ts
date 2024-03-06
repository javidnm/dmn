import dayjs from 'dayjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../database/dbInstance';
import generateOtp from '../helper/generate-otp';
import { generateToken, getExpireTime } from '../helper/jwt';
import { mail } from '../helper/mailer';
import { matchPassword } from '../helper/password';
import { emails } from '../utils/emails';
import { env } from '../utils/env';
import { message } from '../utils/messages';
import LoginSchema from '../validation/auth';
class AuthController {
  signIn = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = LoginSchema.parse(req.body);
    let token: string | null = null;
    const user: any = await prisma.user.findFirstOrThrow({
      where: { email },
      select: { password: true, id: true, email: true, name: true },
    });
    const match = matchPassword(password, user.password);
    if (!match) throw res.status(401).json({ message: 'Incorrect password' });
    delete user.password;
    const expiresIn = getExpireTime(Number(env('JWT_EXPIRY')));
    token = generateToken(user, expiresIn);
    let data = {
      token,
      userId: user.id,
      expiresIn: dayjs().add(expiresIn, 'seconds').toDate()
    };
    await prisma.session.upsert({
      where: { userId: user.id },
      create: { ...data },
      update: { ...data },
    });
    res.status(200).send({
      token,
      user
    })
  };

  signOut = async (req: any, res: Response): Promise<void> => {
    const { token } = req;
    jwt.verify(token, env("JWT_SECRET"));
    const { id } = await prisma.session.findFirstOrThrow({ where: { token }, select: { id: true } });
    await prisma.session.delete({ where: { id } });
    res.status(200).json({ message: 'Sign-out successful' });
  };

  forgotPassword = async (req: any, res: Response): Promise<void> => {
    const { email } = req.body as any;
    const user = await prisma.user.findFirstOrThrow({
      where: { email },
      select: { email: true, id: true, name: true }
    });
    const otpInfo = generateOtp(user.email, user.id);
    await prisma.user.update({
      where: { id: user.id },
      data: { OTP: otpInfo.plain }
    });
    const link = `${env('APP_URL')}/auth/reset-pasword/${otpInfo.hash}`;
    // mail({ html: emails.forgotPassword(link, user.name, dayjs().format('YYYY')), subject: 'Reset Password', email, type: 'SERVICE' })
    res.status(200).send({
      email: user.email,
      message: message.emailSent
    })
  };


  resetPassword = async (req: any, res: Response): Promise<void> => {
    let { hash, password } = req.body as any;
    res.status(200).send(jwt.verify(hash, env("JWT_SECRET")))
  };

}
export default AuthController