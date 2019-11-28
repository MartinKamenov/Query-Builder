import React, { useCallback } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from 'react-apollo';
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
    const [runQuery, { called, loading, data }] = useLazyQuery(USERS_QUERY);
    const handleClick = () => runQuery({ variables: {} });

    const visualizeContent = useCallback(() => {
        if(!called) {
            return <h3>No users are loaded</h3>
        }
        if(loading) {
            return (<h4>Loading...</h4>);
        } else if(data.users) {
            return (
            <div className='row'>
                {
                    data.users.map((user) => (
                    <UserDetails
                        key={user['id']}
                        user={user}/>
                    ))
                }
            </div>);
        }
    }, [data, loading])

    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>Users</h1>
            <button className='btn btn-success' onClick={handleClick}>Get users</button>
            { visualizeContent() }
        </div>
    );
}
 
export default UserList;