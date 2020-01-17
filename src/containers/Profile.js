import React from 'react'
import WordList from '../components/WordList'

export default function Profile({ userWords, deleteUserWord, updateWord, loading }) {
    return (
        <div className="page-container">
            <div className="profile"> 
                <WordList userWords={userWords} deleteUserWord={deleteUserWord} updateWord={updateWord} loading={loading}/>
            </div>
        </div>
    )
}
