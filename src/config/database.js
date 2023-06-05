import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log("\x1b[35m%s\x1b[0m","Db is connected"))
    .catch((error) => console.error("Error to connect : ",error));