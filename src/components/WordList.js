import React from 'react'

export default function WordList({ words }) {
    const availableWords = () => {
        return words.map(word => {
            return (
                <div className="word-list-items">
                    <h3>{word.word}</h3>
                    <p>{word.meaning}</p>
                </div>
            )
        })
    }
    return (
        <div className="word-list">
            <div className="word-list-header">
                <h3>Words:</h3>
                <h3>Meaning:</h3>
            </div>
            {availableWords()}
        </div>
    )
}
