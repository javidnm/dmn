import { Response } from 'express';
import { message } from '../utils/messages';
import { mail } from '../helper/mailer';
import { emails } from '../utils/emails';
class ContactController {
    query = async (req: any, res: Response): Promise<void> => {
        console.log(req.body);
        const { email, fullname, notes, subject } = req.body;
        mail({ email, subject, html: emails.query(email, fullname, notes), type: 'CONTACT' })
        res.status(200).send({ message: message.query })
    };
}

export default ContactController