import app from "./app.js";
import './database.js'
const port = 3000;


app.listen(port, () => {
    console.log("\x1b[35m%s\x1b[0m",`Application is read on port ${port}...`);
});