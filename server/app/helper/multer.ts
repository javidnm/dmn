import multer from 'multer';
import { v4 as uuid } from 'uuid';
const requestId = uuid();
let storage = multer.diskStorage({
	filename: (req:any, file:any, cb:any) => {
		file.filename = requestId + '_' + file.originalname;
		cb(null, file.filename);
	},
});

export default multer({ storage });
