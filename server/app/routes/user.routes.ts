import { Router } from "express";
import UserController from "../controller/user.controller";
import { verifyToken } from "../helper/jwt";
import errorHandler from "../middleware/errorHandller";

const router: Router = Router();

router.put("/update", verifyToken(), errorHandler(new UserController().update));

export default router;