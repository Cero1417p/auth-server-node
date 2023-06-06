import "./config/database.js";

import app from "./app.js";
import cors from "cors";
// Configuración de CORS
const corsOptions = {
    origin: false, // Lista de dominios permitidos
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};
app.use(cors(corsOptions));
const port = 3000;
app.listen(port, () => {
    console.log("\x1b[35m%s\x1b[0m",`Application is read on port ${port}...`);
});