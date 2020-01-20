import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNav({ resetActiveKanji, resetVideoState }) {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item">
                    <Link to="/" className="side-nav__link" onClick={() => {resetActiveKanji(); resetVideoState()}}>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/kanji_1" className="side-nav__link" onClick={() => {resetActiveKanji(); resetVideoState()}}>
                        <span>Kanji 1</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/kanji_2" className="side-nav__link" onClick={() => {resetActiveKanji(); resetVideoState()}}>
                        <span>Kanji 2</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/kanji_3" className="side-nav__link" onClick={() => {resetActiveKanji(); resetVideoState()}}>
                        <span>Kanji 3</span>
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/quiz" className="side-nav__link" onClick={() => {resetActiveKanji(); resetVideoState()}}>
                        <span>Quizzes</span>
                    </Link>
                </li>
            </ul>
            <div className="legal">
                Footer to put github and linked in
            </div>
        </nav>
    )
}
