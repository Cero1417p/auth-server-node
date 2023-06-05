import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
const router = Router();
import {verifySignUp}  from "../middlewares/index.js";

//ejemplo de agrupameinto de rutas
router.route("/uno").get((req, res) => {
    res.send('Hola mundo routes')
})
let objetoJSON ={
    "email":"prueba3",
    "password":"prueba3",
    "name":"prueba3",
    "roles":["admin","user",""]
}
router.get(
    "/sign-up",
    (req,res)=>{
        res.send(`<div>Use post method and send in the body  <pre>${JSON.stringify(objetoJSON, null, 2)}</pre></div>`)
    }
);
router.post(
    "/sign-up",
    [verifySignUp.checkExistingUser,verifySignUp.checkExistingRole],
    authController.signUp
);
router.post("/sign-in", authController.signIn);

export default router;
