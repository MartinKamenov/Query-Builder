import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>Users</h1>
            {
                users.map((user) => (<div>{user.name}</div>))
            }
            <button onClick={() => dispatch({type: 'GetAll'})}>Increment</button>
        </div>
    );
}
 
export default UserList;