import { Prisma } from '@prisma/client';
import prisma from './dbInstance';
import { hashPassword } from '../helper/password';

const USER: Prisma.UserCreateInput[] | Prisma.UserUncheckedCreateInput[] = [
	{
		name: 'Admin',
		email: 'admin@kyriosdev.com',
		password: hashPassword('login123'),
	},
];
async function seed() {
	await prisma.user.createMany({ data: USER, skipDuplicates: true })
}

seed()
	.then(() => {
		console.log('successfully seed');
	})
	.catch((err) => {
		console.log(err.message);
		process.exit(0);
	});
