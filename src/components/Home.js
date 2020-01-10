import React from 'react'

export default function Home({ kanji }) {

    const kanjihistory = kanji.map(info => info.history)
    const kanjiKunYomi = kanji.map(info => info.kunyomi)
    const kanjiOnYomi = kanji.map(info => info.onyomi)

    return (
        <div className="home-container">
            <div className="description">
                <h2>History</h2>
                <p className="paragraph">
                    {kanjihistory}
                </p>
            </div>
            <div className="description">
                <h2>Kun-Yomi</h2>
                <p className="paragraph">
                    {kanjiKunYomi}
                </p>
            </div>
            <div className="description">
                <h2>On-Yomi</h2>
                <p className="paragraph">
                    {kanjiOnYomi}
                </p>
            </div>
        </div>
    )
}
