import db from "../models";

export default {
    Query: {
        permission: async (root, { id }) => {
            return await db.permission.findById(id);
        },

        permissions: async () => {
            console.log("permissions");

            return await db.permission.findAll();
        }
    },
    Permission: {
        roles: async permission => {
            return await db.role.findAll({
                include: [
                    {
                        model: db.permission,
                        where: { id: permission.id }
                    }
                ]
            });
        }
    }
};
