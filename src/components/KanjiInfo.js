import React from 'react'

export default function KanjiInfo({ kanji, goBack }) {
    return (
        <div className="kanji-1-info">
            <div className="kanji-symbol">
                <img src={kanji.stroke_gif} alt="stroke order gif"/>   
            </div>
            <div className="kanji-data">
                <h2>{kanji.symbol}</h2>
                <h3>Kun-Yomi: {kanji.kunyomi_1}, {kanji.kunyomi_2}</h3>
                <h3>On-Yomi: {kanji.onyomi_1}, {kanji.onyomi_2}</h3>
                <p>meaning: {kanji.meaning}</p>
                <button 
                    className="go-back"
                    onClick={goBack}
                    >
                    Go Back
                </button>
            </div>
        </div>
    )
}
