import db from "../models";
import { GraphQLScalarType } from "graphql"; // ES6

export default {
    Query: {
        user: async (root, { id }, { user }) => {
            console.log(user);

            //if user is not logged in
            if (!user) {
                throw new AuthenticationError("Unauthorized");
            }

            //if user does not have "admin" permission
            /*if (user.role !== "admin") {
                throw new AuthenticationError("Unauthorized");
            }*/

            return await db.user.findById(id);
        },

        users: async (root, input, { user }) => {
            console.log(user);

            //if user is not logged in
            if (!user) {
                throw new AuthenticationError("Unauthorized");
            }

            return await db.user.findAll();
        }
    },
    User: {
        role: async user => {
            return await db.role.findById(user.roleId);
        }
    }
};
