import { Router } from "express";
import ContactController from "../controller/contact.controller";
import errorHandler from "../middleware/errorHandller";
import SectionController from "../controller/section.controller";
import { verifyToken } from "../helper/jwt";

const router: Router = Router();

router.post("/query", errorHandler(new ContactController().query));
router.post("/", verifyToken(), errorHandler(new SectionController().add));
router.get("/", errorHandler(new SectionController().get));
router.put("/", verifyToken(), errorHandler(new SectionController().update));
router.delete("/", verifyToken(), errorHandler(new SectionController().delete));


export default router;