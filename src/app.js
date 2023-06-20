import express from "express";

import authRoutes from "./routes/auth.routes.js";
import Index from "./views/index.js";

import { createRoles } from "./helpers/loaderData.js";
import myLogger from "./helpers/logger.js";

import fs from "fs";
import https from "https";

import cors from "cors";

//  load default roles
const responseCreateRoles = await createRoles();
console.log("answer to create roles => ", responseCreateRoles);

const app = express();

// Configuration CORS
//XXX : local access is by default
const corsOptions = {
  origin: ["https://example.com", "https://chat.openai.com"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(myLogger);

app.get("/", (req, res) => {
  res.send(Index);
});
app.use("/api/auth", authRoutes);

const options = {
  key: fs.readFileSync("./certificates/key.pem"),
  cert: fs.readFileSync("./certificates/cert.pem"),
};

// Create HTTPS server
const server = https.createServer(options, app);

export default server;
