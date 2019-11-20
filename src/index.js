import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/User/UserList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import apiService from './api.sevice';

const reducer = (state = { users: [{ name: 'Pesho' }] }, action) => {
    switch(action.type) {
        case 'GetAll':
            const stateCopy = Object.assign({}, state);
            stateCopy.users = apiService.getUsersREST();
            return stateCopy;
        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <UserList />
</Provider>,
document.getElementById('root'));
