import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import UserList from './components/User/UserList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'Increment':
            const stateCopy = Object.assign({}, state);
            stateCopy.count++;
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
