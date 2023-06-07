import express from "express";

import authRoutes from "./routes/auth.routes.js";
import Index from "./views/index.js";

import {createRoles} from "./helpers/loaderData.js";
import myLogger from "./helpers/logger.js";


//  load default roles
const responseCreateRoles = await createRoles()
console.log("answer to create roles => ",responseCreateRoles);

const app = express();

app.use(express.json());
app.use(myLogger);

app.get("/",(req, res) => {
    res.send(Index);
});
app.use("/api/auth",authRoutes);

export default app;