import { Router } from "express";
import ContactController from "../controller/contact.controller";
import errorHandler from "../middleware/errorHandller";

const router: Router = Router();
router.post("/", errorHandler(new ContactController().query));


export default router;