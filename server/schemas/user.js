import { gql } from "apollo-server-express";

export default gql`
    scalar DateTime

    extend type Query {
        getCurrentUser: User
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
        has_tablet: Boolean
        has_touchscreen: Boolean
        role: Role
        avatar: String
        createdAt: DateTime
        updatedAt: DateTime
    }
`;
