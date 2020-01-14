import React from 'react'

export default function KanjiCard({ character, toggleKanji }) {
    const viewKanji = () => {
        toggleKanji(character)
    }
    return (<h3 onClick={viewKanji}>{character.symbol}</h3>)
}
