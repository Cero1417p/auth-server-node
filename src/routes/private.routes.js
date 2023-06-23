import router from "./auth.routes.js";
import { basicAuth } from "../middlewares/index.js";

router.get("/private", basicAuth.verifyToken, (req, res) => {
  res.send("Hola mundo routes");
});

export default router;
