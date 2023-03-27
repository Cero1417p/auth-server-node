import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
const router = Router();
import {verifySignUp}  from "../middlewares/index.js";

//ejemplo de agrupameinto de rutas
router.route("/uno").get((req, res) => {
    res.send('Hola mundo routes')
})
router.get(
    "/sign-up",
    (req,res)=>{
        res.send("<div>hola mundo</div>")
    }
);
router.post(
    "/sign-up",
    [verifySignUp.checkExistingUser,verifySignUp.checkExistingRole],
    authController.signUp
);
router.post("/sign-in", authController.signIn);

export default router;
