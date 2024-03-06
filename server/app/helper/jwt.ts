import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../database/dbInstance';
import { env } from '../utils/env';

export const getExpireTime = (day: number): number => 60 * 60 * 24 * day;

export function generateToken(payLoad: any, expiresIn: number): string {
	const isObject = typeof payLoad === 'object';
	if (!payLoad) {
		const error = new TypeError('Token Payload Should Not Be Empty');
		throw error;
	}
	if (!isObject) {
		const error = new TypeError('Token Payload Must Be An Object');
		throw error;
	}
	return jwt.sign(payLoad, env('JWT_SECRET'), { expiresIn });
}

export function verifyToken() {
	return async (req: any, res: Response,next: NextFunction) => {
		try {
			const token = ((req.headers.authorization || req.headers.Authorization || '') as string)
				.split('Bearer ')
				.pop() as string;
			const { user } = await prisma.session.findFirstOrThrow({ where: { token }, select: { user: true } });
			req.user = user;
			req.token = token;
			next();
		} catch (err: any) {
			res.status(401).json({ message: "Forbidden", })
		}
	};
}
