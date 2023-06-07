import "./config/database.js";

import app from "./app.js";
import cors from "cors";

//
const port = 3000;
// Configuración de CORS
const corsOptions = {
    origin: ["http://example.com"],
    methods: ["GET", "POST","PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log("\x1b[35m%s\x1b[0m",`Application is read on port ${port}...`);
});