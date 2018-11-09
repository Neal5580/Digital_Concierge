import db from "../models";
import { GraphQLScalarType } from "graphql"; // ES6

export default {
    Query: {
        user: async (root, { id }) => {
            return await db.user.findById(id);
        },

        users: async () => {
            return await db.user.findAll();
        }
    },
    User: {
        role: async user => {
            return await db.role.findById(user.roleId);
        }
    }
};
