import { Router } from "express";
import MediaController from "../controller/media.controller";
import { verifyToken } from "../helper/jwt";
import upload from "../helper/multer";
import errorHandler from "../middleware/errorHandller";

const router: Router = Router();
router.post("/upload", verifyToken(), upload.array('files', 12), errorHandler(new MediaController().upload));

export default router;