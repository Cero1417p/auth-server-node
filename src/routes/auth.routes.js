import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
const router = Router();
import { verifySignUp, basicAuth } from "../middlewares/index.js";
import signIn from "./../views/signIn.js";
import signUp from "./../views/signUp.js";

// example nested routes
router.route("/uno").get((req, res) => {
  res.send("Hola mundo routes");
});

//  SIGN-UP
router.post(
  "/sign-up",
  basicAuth.basicAuth,
  verifySignUp.checkExistingUser,
  verifySignUp.checkExistingRole,
  authController.signUp
);
//  SIGN-IN
router.post("/sign-in", basicAuth.basicAuth, authController.signIn);

router.get("/sign-up", (req, res) => {
  res.send(signUp);
});
router.get("/sign-in", (req, res) => {
  res.send(signIn);
});

export default router;
