import gql from "graphql-tag";

export const getCurrentUserQuery = gql`
    query getUser {
        user(id: 1) {
            id
            name
            email
            has_parent_category
            active
            createdAt
            updatedAt
            role {
                id
                name
            }
        }
    }
`;
