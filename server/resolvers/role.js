import db from "../models";

export default {
    Query: {
        role: async (root, { id }) => {
            return await db.role.findById(id);
        },

        roles: async () => {
            return await db.role.findAll();
        }
    },
    Role: {
        users: async role => {
            return await db.user.findAll({
                where: {
                    roleId: role.id
                }
            });
        },
        permissions: async role => {
            return await db.permission.findAll({
                include: [
                    {
                        model: db.role,
                        where: { id: role.id }
                    }
                ]
            });
        }
    }
};
