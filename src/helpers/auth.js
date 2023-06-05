import bcrypt from"bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken = (user) => {
    return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

export const hashPassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
    console.log("=============================")
    console.log("")
    return bcrypt.compare(password, hashedPassword);
};
