import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from '../User/UserList';
import SingleUser from '../User/SingleUser';

const AppRouter = () => (
    <Router>
        <div className='container'>
            <Route exact path='/' component={UserList}></Route>
            <Route path='/:id' component={SingleUser}></Route>
        </div>
    </Router>
);
 
export default AppRouter;