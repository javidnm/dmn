import { Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import { message } from '../utils/messages';

class MediaController {
    upload = async (req: any, res: Response): Promise<void> => {
        cloudinary.config({
            cloud_name: 'dm1rd1efn',
            api_key: '862323953929966',
            api_secret: '9G2aDlf5fTnErbn9Znq1vSBH-s4'
        });
        let urls = []
        for (let i = 0; i < req.files.length; i++) {
            let result: any = await cloudinary.uploader.upload(req.files[i].path)
                .then((result) => {
                    fs.unlinkSync(req.files[i].path)
                    return {
                        message: "Success",
                        url: result.url
                    };
                }).catch((error) => {
                    fs.unlinkSync(req.files[i].path)
                    return { message: "Fail", };
                });
            if (result.message === "Success") {
                urls.push(result.url)
            }
        }
        res.status(200).send({ message: "Uploaded successfully", urls })
    };
}
export default MediaController