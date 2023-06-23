import auth from "basic-auth";
import jwt from "jsonwebtoken";

export const basicAuth = (req, res, next) => {
  const credentials = auth(req);
  if (
    !credentials ||
    credentials.name !== process.env.USERNAME ||
    credentials.pass !== process.env.PASSWORD
  ) {
    res.status(401).json({ message: "Invalid credentials" });
  } else {
    // Valid credentials, continue
    next();
  }
};

export const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const [bearer, token] = authorizationHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "Invalid token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log("process.env.JWT_SECRET: ", process.env.JWT_SECRET);
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // El token es válido, se puede acceder a la información decodificada en `decoded`
    req.usuario = decoded.usuario;
    next();
  });
};
