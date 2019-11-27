import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ user }) => (
    <div
        className='col-md-4 col-sm-6'
        style={{
            border: '1px solid black',
            borderRadius: 10,
            padding: 10
        }}>
        <h3>{user['name']}, {user['age']}</h3>
        <img
            style={{
                width: 100,
                height: 100,
                border: '1px solid black',
                borderRadius: '50%'
            }}
            src={user['imageUrl']}
            alt={user['name']}
            width={100}
            height={100}/>
    </div>
);

UserDetails.propTypes = {
    user: PropTypes.shape({
        age: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
};
 
export default UserDetails;