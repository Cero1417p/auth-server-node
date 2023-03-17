import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
const router = Router();
import {verifySignUp}  from "../middlewares/index.js";

router.post(
    "/sign-up",
    [verifySignUp.checkExistingUser,verifySignUp.checkExistingRole],
    authController.signUp
);
router.post("/sign-in", authController.signIn);

export default router;
