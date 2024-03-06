import { Response } from 'express';
import { SectionSchema, SectionUpdateSchema } from '../validation/section';
import prisma from '../database/dbInstance';
import { message } from '../utils/messages';
class SectionController {
    add = async (req: any, res: Response): Promise<void> => {
        const data = SectionSchema.parse(req.body);
        await prisma.section.create({ data })
        res.status(200).send({ message: message.created('data') })
    };
    get = async (req: any, res: Response): Promise<void> => {
        let { take, skip, type } = req.query as any;
        let { id } = req.query as any;
        if (!type) type = { not: 'NEWS' };
        if (take) take = Number(take)
        if (id) id = Number(id)
        let [count, items] = await prisma.$transaction([
            prisma.section.count({ where: { type, id } }),
            prisma.section.findMany(
                {
                    where: { type, id },
                    skip: Number(skip || 0),
                    take,
                }
            )
        ]);
        res.status(200).send({ count, items, message: 'Success' })
    };

    update = async (req: any, res: Response): Promise<void> => {
        let { id, ...rest } = req.body as any;
        const data = SectionUpdateSchema.parse(rest);
        await prisma.section.update({ where: { id }, data })
        res.status(200).send({ message: message.update('data') })
    };

    delete = async (req: any, res: Response): Promise<void> => {
        let { id } = req.body as any;
        await prisma.section.delete({ where: { id } })
        res.status(200).send({ message: message.delete('data') })
    };
}
export default SectionController