import React from 'react'
import WordForm from './WordForm'
import WordList from './WordList'

export default function WordContainer({ createWord, words, loading }) {
    return (
        <div　className="word-container">
            <WordForm submitHandler={createWord}/>
            <WordList words={words}/>
        </div>
    )
}
