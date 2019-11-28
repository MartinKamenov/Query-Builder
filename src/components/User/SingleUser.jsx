import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import UserDetails from './UserDetails';

const requestUserQuery = gql`
query UserQuery($id: String) {
    user(id: $id) {
        age
        name
        id
        imageUrl
    }
}
`;
const SingleUser = ({match: { params: {id} }}) => {
    return (
        <div>
            <h3>User</h3>
            <Query variables={{ id }} query={requestUserQuery}>
                {
                    ({ loading, error, data }) => {
                        if(loading) {
                            return <h4>Loading...</h4>
                        }
                        if(error) {
                            console.log(error);
                        }

                        const user = data.user;
                        return (
                            <UserDetails
                                key={user['id']}
                                user={user}/>
                        );
                    }
                }
            </Query>
        </div>
    );
}
 
export default SingleUser;