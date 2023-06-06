import User from "../models/users.js";
import Role from "../models/roles.js";
import {hashPassword,comparePassword,generateToken} from "../helpers/auth.js";

export const signUp = async (req, res) => {
    try {
        const { name,lastName, email, password, roles } = req.body;
        // Verifica si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exist' });
        }
        // Crea una nueva instancia de usuario con el modelo
        const newUser = new User({ name,lastName,email,password });
        // Hashea la contraseña antes de guardarla en la base de datos
        newUser.password = await hashPassword(password);
        
        // Have ROLES
        if (roles.length>0) {
            // Asumiendo que colocan ROLES correctos
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map((role) => role._id );
        } else {
            const role = await Role.findOne({ name: "user" });
            newUser.roles = [role._id];
        }
        const savedUser = await newUser.save();
        return res.status(201).json({ message: 'Successful registration',body:savedUser });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export const signIn = async (req, res) => {
    try {
        console.log("req.body.email: ",req.body.email)
        const userFound = await User.
        findOne({ email: req.body.email }).
        populate("roles");
        console.log("userFound: ",userFound)
        if (!userFound) return res.status(400).json({ message: "User or password invalid!" });

        const {name,lastName,email,roles} = userFound

        const matchPassword = await comparePassword(
            req.body.password,
            userFound.password
        );
        console.log("matchPassword: ",matchPassword)

        if (!matchPassword)
            return res.status(400).json({ message: "User or password invalid!" });

        const user = {name,lastName,email,roles}

        const token = generateToken(user);
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};