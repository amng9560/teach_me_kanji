import React from 'react'
import image from '../assets/TeachMeKanjiLogo.png'
import { NavLink } from 'react-router-dom'

export default function UserNav({ loggedInUser, logOutUser }) {

    const toggleLogin = () => {
        return (
            loggedInUser
                ? <NavLink className="user-nav-item" to="/login" onClick={logOutUser}>Log Out</NavLink>
                : <NavLink className="user-nav-item" to="/login">Login</NavLink>
        )
    }

    return (
        <header className="header">
            <img src={image} alt="logo" className="logo" />
            <nav className="user-nav">
                {localStorage.getItem('authToken') && loggedInUser
                    ? <NavLink className="user-nav-item" to="/profile">Profile</NavLink>
                    : <NavLink className="user-nav-item" to="/login">Profile</NavLink>
                }
                {toggleLogin()}
            </nav>
        </header>
    )
}
