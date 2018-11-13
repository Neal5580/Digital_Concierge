import gql from "graphql-tag";

export const getSelectedUserQuery = gql`
    query getUser {
        user(id: 1) {
            id
            name
            email
            has_parent_category
            active
            has_tablet
            has_touchscreen
            createdAt
            updatedAt
            role {
                id
                name
            }
        }
    }
`;

export const getCurrentUserQuery = gql`
    query getCurrentUser {
        getCurrentUser {
            id
            name
            email
            has_parent_category
            active
            has_tablet
            has_touchscreen
            createdAt
            updatedAt
            role {
                id
                name
            }
        }
    }
`;
