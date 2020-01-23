import React from 'react'
import WordForm from './WordForm'
import WordList from './WordList'

export default function WordContainer({ createWord, words, searchTerm, updateSearchTerm, isLoggedIn }) {
    return (
        <div　className="word-container">
            <WordForm submitHandler={createWord}/>
            <WordList isLoggedIn={isLoggedIn} createWord={createWord} words={words} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
        </div>
    )
}
