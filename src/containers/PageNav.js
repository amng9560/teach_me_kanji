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
                <a href="https://github.com/amng9560" className="github"><i className="sm-icon"><img alt="github" className="sm-icon" src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-outline.png"></img></i></a>
                <a href="https://www.linkedin.com/in/amy-vy-nguyen/" className="linkedIn"><i className="linkedIn"><img alt="LinkedIn" className="sm-icon" src="https://www.shareicon.net/data/256x256/2017/03/07/880593_media_512x512.png"></img></i></a>
            </div>
        </nav>
    )
}
