import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import UserDetails from './UserDetails';

const USERS_QUERY = gql`
    query UsersQuery {
        users {
            age
            name
            id
            imageUrl
        }
    }
`;

const UserList = () => {
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>Users</h1>
            <Query query={USERS_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if(loading) {
                            return <h4>Loading...</h4>
                        }
                        if(error) {
                            console.log(error);
                        }

                        return (data.users.map((user) => (
                            <UserDetails
                                key={user['id']}
                                user={user}/>
                        )));
                    }
                }
            </Query>
        </div>
    );
}
 
export default UserList;