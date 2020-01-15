import React from 'react'
import WordList from '../components/WordList'

export default function Profile({ userWords, deleteUserWord, updateWord }) {
    return (
        <div className="profile">
            <WordList userWords={userWords} deleteUserWord={deleteUserWord} updateWord={updateWord}/>
        </div>
    )
}
