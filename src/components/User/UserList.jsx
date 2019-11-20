import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
        </>
    );
}
 
export default UserList;