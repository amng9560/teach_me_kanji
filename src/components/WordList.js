import React from 'react'
import WordCard from './WordCard'
import ProfileWordCard from './ProfileWordCard'
import SearchBar from './SearchBar'

export default function WordList({ words, userWords, deleteUserWord, updateWord, searchTerm, updateSearchTerm, createWord, isLoggedIn }) {
    const availableWords = () => {
        return words.map((word, i) => {
            return (
                <WordCard wordItem={word} key={i} createWord={createWord} isLoggedIn={isLoggedIn}/>
            )
        })
    }

    const UserWords = () => {
        if(userWords.length > 0 && userWords)
        return userWords.flat().map((userWord, i) => {
            return (
               <ProfileWordCard userWord={userWord} key={i} deleteUserWord={deleteUserWord} updateWord={updateWord}/>
            )
        })
    }
    
    return words 
        ? (<div className="word-list">
            <SearchBar searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
            <div className="word-list-header">
                <h3>Words:</h3>
                <h3>Meaning:</h3>
            </div>
            {availableWords()}
            </div>)
        : <div className="profile-word-list">
            <SearchBar searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
            <div className="profile-word-list-header">
                <h3>Words:</h3>
                <h3>Meaning:</h3>
            </div>
            {UserWords()}
        </div>

}
