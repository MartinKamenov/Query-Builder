import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppRouter from './components/routing/AppRouter';

import 'bootstrap/dist/css/bootstrap.css';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

const reducer = (state = { users: [] }, action) => {
    switch(action.type) {
        case 'SetUsers':
            const stateCopy = Object.assign({}, state);
            stateCopy.users = action.users;
            return stateCopy;
        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <ApolloProvider client={apolloClient}>
        <AppRouter />
    </ApolloProvider>
</Provider>,
document.getElementById('root'));
