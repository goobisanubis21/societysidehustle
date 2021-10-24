import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './homeComp.css';

import {useAuth} from "../../context/AuthContext"


function HomeComp() {

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
        <div>
            <div className='home-main'>
                home page
            </div>
        </div>
    )
}

export default HomeComp
