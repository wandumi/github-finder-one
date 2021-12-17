import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Navbar = ({icon, title }) => {

        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-dark">
                <div className="container">
                <Link className="navbar-brand" to="/"><i className={icon}></i> {title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                  
                    </ul>
                </div>
                </div>
            </nav>
        )
    
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
