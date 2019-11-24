import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ user }) => (
    <div>
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
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
 
export default UserDetails;