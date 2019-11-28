import React, { useCallback } from 'react';
import { useLazyQuery } from 'react-apollo';
import UserDetails from './UserDetails';
import queries from '../../graphql/queries';


const UserList = () => {
    const [runQuery, { called, loading, data }] = useLazyQuery(queries.USERS_QUERY);
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
                    <div className='col-md-4 col-sm-6'>
                        <UserDetails
                            key={user['id']}
                            user={user}/>
                    </div>
                    ))
                }
            </div>);
        }
    }, [data, loading]);

    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>Users</h1>
            <button
                style={{ margin: 5 }}
                className='btn btn-success'
                onClick={handleClick}>Get users</button>
            { visualizeContent() }
        </div>
    );
}
 
export default UserList;