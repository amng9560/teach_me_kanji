import React from 'react'
import image from '../assets/TeachMeKanjiLogo.png'

export default function UserNav() {
    return (
        <header className="header">
            <img src={image} alt="logo" className="logo" />
            <nav class="user-nav">
                <div class="user-nav__user">
                    <span class="user-nav__user-name">Login/Log Out</span>
                </div>
            </nav>
        </header>
    )
}
