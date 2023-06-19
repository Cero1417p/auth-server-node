import "./config/database.js";

import server from "./app.js";

//
const port = 3000;


server.listen(port, () => {
    console.log("\x1b[35m%s\x1b[0m",`Servidor https is read on port ${port}...`);
});