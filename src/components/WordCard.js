import React from 'react'

export default function WordCard ({ wordItem, createWord, isLoggedIn }){
    return (
        <div className="word-list-items">
            <h3>{wordItem.word}</h3>
            <p>{wordItem.meaning}</p>
            {isLoggedIn
                ? <img onClick={() => {createWord(wordItem)}} src="https://www.shareicon.net/data/256x256/2015/09/22/644510_add_512x512.png" alt="add button"/>
                : null
            }
        </div>
    )
}
