import { gql } from "apollo-server-express";

export default gql`
    scalar DateTime

    extend type Query {
        user(id: ID!): User
        users: [User]
    }

    type User {
        id: ID!
        name: String
        email: String
        password: String
        has_parent_category: Boolean
        active: Boolean
        role: Role
        createdAt: DateTime
        updatedAt: DateTime
    }
`;
