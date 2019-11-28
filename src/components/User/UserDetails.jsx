import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserDetails = ({ user }) => (
    <div
        className='col-md-4 col-sm-6'
        style={{
            border: '1px solid black',
            borderRadius: 10,
            padding: 10
        }}>
        <Link to={`/${user.id}`}>
            <h3 style={{
                textDecoration: 'none',
                color: 'black'
            }}>{user['name']}, {user['age']}</h3>
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
        </Link>
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