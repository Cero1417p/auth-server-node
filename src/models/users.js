import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        name: {
            type: String,
        },
        lastName:{
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        roles: [
            {
                type: Schema.Types.ObjectId,
                ref: "roles",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
export default model("users", userSchema);