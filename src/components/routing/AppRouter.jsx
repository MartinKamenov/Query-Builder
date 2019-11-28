import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from '../User/UserList';
import SingleUser from '../User/SingleUser';

const AppRouter = () => (
    <Router>
        <div className='container' style={{ textAlign: 'center' }}>
            <Route exact path='/' component={UserList}/>
            <Route path='/:id' component={SingleUser}/>
        </div>
    </Router>
);
 
export default AppRouter;