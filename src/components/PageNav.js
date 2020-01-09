import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNav() {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item">
                    <NavLink to="/" className="side-nav__link">
                        Home
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink to="/" className="side-nav__link">
                        <span>Kanji 1</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink href="#" className="side-nav__link">
                    <span>Kanji 2</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink href="#" className="side-nav__link">
                        <span>Kanji 3</span>
                    </NavLink>
                </li>
            </ul>
            <div className="legal">
                Footer to put github and linked in
            </div>
        </nav>
    )
}
