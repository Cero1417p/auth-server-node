import { Schema, model } from "mongoose";

export const ROLES = ["admin", "user"];

const roleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("roles", roleSchema);
