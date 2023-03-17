import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import Index from "./routes/index.js";
import {createRoles} from "./helpers/loaderData.js";

//load default roles
const responseCreateRoles = await createRoles()
console.log("answer to create roles => ",responseCreateRoles);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(Index);
});

app.use("/api/auth",authRoutes)

export default app;