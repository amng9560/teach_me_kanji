import React from 'react'
import WordList from '../components/WordList'

export default function Profile({ userWords, deleteUserWord, updateWord, searchTerm, updateSearchTerm }) {
    return (
        <div className="page-container">
            <div className="profile"> 
                <WordList 
                    userWords={userWords} 
                    deleteUserWord={deleteUserWord} 
                    updateWord={updateWord} 
                    searchTerm={searchTerm} 
                    updateSearchTerm={updateSearchTerm}
                />
            </div>
        </div>
    )
}
