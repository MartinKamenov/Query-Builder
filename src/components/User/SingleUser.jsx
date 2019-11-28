import React from 'react';
import { Query } from 'react-apollo';
import UserDetails from './UserDetails';
import queries from '../../graphql/queries';

const SingleUser = ({match: { params: {id} }}) => {
    return (
        <div style={{ margin: 'auto' }}>
            <h3>User</h3>
            <Query variables={{ id }} query={queries.REQUEST_USER_QUERY}>
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