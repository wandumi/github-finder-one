import React from 'react'
import PropTypes from 'prop-types';


const UsersItems = ({ user: {login, html_url, avatar_url }}) => {
    
        return (
                <div className='col-lg-3 col-md-4 col-sm-3  mb-5'>
                    <div className="card card-width " >
                        <img src={avatar_url} class="card-img-top" alt="avatar-images" />
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            
                            <a href={html_url} className="btn btn-sm btn-primary" target="blank">Visit Profile</a>

                            {/* <Link to={`/user/${login}`} className="btn btn-sm btn-primary">Show Profile</Link> */}
                        </div>

                    </div>
                </div>
        )
    
}

UsersItems.prototype = {
    user: PropTypes.object.isRequired,
}

export default UsersItems
