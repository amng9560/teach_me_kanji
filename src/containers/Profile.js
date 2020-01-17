import React from 'react'
import WordList from '../components/WordList'

export default function Profile({ userWords, deleteUserWord, updateWord, loading }) {
    return (
        <div className="profile">
            {loading 
                ?  <div className="profile-loading">
                    <img src="https://ebanking.eurobank.com.cy/netteller-war/resources/images/ring.gif" alt="loading gif" className="loading-gif"/>
                </div>
                : <WordList userWords={userWords} deleteUserWord={deleteUserWord} updateWord={updateWord}/>
            }
        </div>
    )
}
