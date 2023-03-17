import User from "../models/users.js";
import Role from "../models/roles.js";
import Jwt from "jsonwebtoken";
//import { SECRET } from "../config";
export const signUp = async (req, res) => {
    try {
        const { name, email, password, roles } = req.body;
        const hash = await User.encryptPassword(password);
        const newUser = new User({
            name,
            email,
            password: hash,
        });

        if (roles.length>0) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map((role) => role._id );
        } else {
            const role = await Role.findOne({ name: "user" });
            newUser.roles = [role._id];
        }

        const savedUser = await newUser.save();
        const user = {
            name: savedUser.name,
            email: savedUser.email,
            roles:savedUser.roles
        };
        const token = Jwt.sign(user,"gg", {expiresIn: 60000,});
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
export const signIn = async (req, res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email }).populate(
            "roles"
        );
        if (!userFound) return res.status(400).json({ message: "User or password invalid!" });

        const matchPassword = await User.comparePassword(
            req.body.password,
            userFound.password
        );

        if (!matchPassword)
            return res.status(400).json({ message: "User or password invalid!" });

        const user = {
            name:userFound.name,
            email:userFound.email,
            roles:userFound.roles
        }

        const token = Jwt.sign(user, "gg", { expiresIn: 60000 });

        res.json({ token });
    } catch (error) {
        console.log(error);
    }
};
