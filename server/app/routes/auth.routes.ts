import { Router } from "express";
import AuthController from "../controller/auth.controller";
import errorHandler from "../middleware/errorHandller";
import { verifyToken } from "../helper/jwt";

const router: Router = Router();

router.post("/sign-in", errorHandler(new AuthController().signIn));
router.post("/forgot-password", errorHandler(new AuthController().forgotPassword));
router.post("/sign-out",verifyToken(),errorHandler(new AuthController().signOut));

export default router;