import mongoose from "mongoose";
mongoose
    .connect("mongodb+srv://usermongo:shM8DpWsAX9C2zq6@cluster-prueba.pcorrsr.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log("\x1b[35m%s\x1b[0m","Db is connected"))
    .catch((error) => console.error("Error to connect : ",error));
