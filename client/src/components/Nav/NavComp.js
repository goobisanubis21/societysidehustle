import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import { useAuth } from '../../context/AuthContext';
import './navComp.css';

function NavComp() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div className='navBar-container'>
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <Link to='/'>
                    <div className="navbar-brand">
                        {/* <img className='nav-logo' alt='logo' src=''></img> */}
                        {currentUser.email}
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/'><div className="nav-link">Home</div></Link>
                        </li>
                        <Button className='logoutBtn' variant="link" onClick={handleLogout}>Log Out</Button>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavComp
