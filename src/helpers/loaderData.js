import Role from "../models/roles.js";
export const createRoles = async () => {
    try {
        //  esto no deberia hacer
        //  cada recarga
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return "roles already exist";
        const values = await Promise.all([
            new Role({ name: "admin" }).save(),
            new Role({ name: "user" }).save(),
            new Role({ name: "private" }).save(),
        ]);
        return "Roles created => "+values;
    } catch (error) {
        return error;
    }
};

