import gql from 'graphql-tag';

const queries = {
    USERS_QUERY: gql`
        query UsersQuery {
            users {
                age
                name
                id
                imageUrl
            }
        }
    `,
    REQUEST_USER_QUERY: gql`
        query UserQuery($id: String) {
            user(id: $id) {
                age
                name
                id
                imageUrl
            }
        }
    `
};

export default queries;