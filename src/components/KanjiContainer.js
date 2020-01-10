import React from 'react'

export default function KanjiContainer({ characters }) {
    const characterContainer = () => {
        return characters.flat().map(character => {
            return <h3>{character.symbol}</h3>
        })
    }
    return (
        <div className="kanji-1">
            <div className="kanji-1-characters">
                {characterContainer()}
            </div>
        </div>
    )
}
