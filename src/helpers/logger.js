import getDate from "./getDate.js";

const myLogger = function (req, res, next) {
    const requestType = req.method;
    if(requestType!=="GET"){
        console.log("\x1b[34m", `[ ${getDate()} ]`,"\x1b[0m","INFO  ---  req.body : ",req.body)
    }
    next()
}
export default myLogger