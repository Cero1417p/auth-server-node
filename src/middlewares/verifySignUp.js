import User from "../models/users.js";
import { ROLES } from "../models/roles.js";

export const checkExistingUser = async (req, res, next) => {
  try {
    const email = await User.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "The email already exists" });

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkExistingRole = (req, res, next) => {
  try {
    if (!req.body.roles)
      return res.status(400).json({ message: "No have roles" });

    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
