import React from 'react'
import UserItem from './UsersItems';
import Spinner from '../common/spinner';
import PropTypes from 'prop-types';

const users = ({users, loading}) => {
        if(loading){
            return <Spinner />
        } else {
            return (
                <div className='row align-items-center mx-auto'>
                    {users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            )

        }
    
}
users.prototype = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default users
