import Role from "../models/roles.js";
export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;
        const values = await Promise.all([
            new Role({ name: "admin" }).save(),
            new Role({ name: "user" }).save(),
            new Role({ name: "private" }).save(),
        ]);
        console.log("Create roles => ",values);
    } catch (error) {
        console.error(error);
    }
};

