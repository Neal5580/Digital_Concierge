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
        /*permissions: async role => {
            return await db.user.findAll({
                where: {
                    roleId: role.id
                }
            });
        }*/
    }
};
