import { Response } from 'express';
import prisma from '../database/dbInstance';
import { message } from '../utils/messages';
import UserSchema from '../validation/user';
import { hashPassword } from '../helper/password';
class UserController {
  update = async (req: any, res: Response): Promise<void> => {
    const { user } = req;
    const data = UserSchema.parse(req.body);
    if (data.password) data.password = hashPassword(data.password)
    let val: any = await prisma.user.update({ where: { id: user.id }, data });
    delete val?.password;
    res.status(200).send({
      user: val,
      message: message.update('account')
    })
  };
}
export default UserController