import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        role(id: ID!): Role
        roles: [Role]
    }

    type Role {
        id: ID!
        name: String
        users: [User]
    }
`;
