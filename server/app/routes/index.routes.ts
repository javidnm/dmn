import { Router } from "express";
import auth from "./auth.routes";
import media from "./media.routes";
import site from "./site.routes";
import user from "./user.routes";
import query from "./query.routes";

const router: Router = Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/media", media);
router.use("/site", site);
router.use("/query", query);

export default router;