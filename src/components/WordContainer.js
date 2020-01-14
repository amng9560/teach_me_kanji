import React from 'react'
import AddNewWord from './AddNewWord'
import WordList from './WordList'

export default function WordContainer({ createWord, words }) {
    return (
        <div　className="word-container">
            <AddNewWord createWord={createWord}/>
            <WordList words={words}/>
        </div>
    )
}
