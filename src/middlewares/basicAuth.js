import auth from "basic-auth";

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
