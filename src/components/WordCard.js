import React from 'react'

export default function WordCard ({ wordItem, createWord, isLoggedIn }){
    return (
        <div className="word-list-items">
            <h3>{wordItem.word}</h3>
            <p>{wordItem.meaning}</p>
            {isLoggedIn
                ? <img onClick={() => {createWord(wordItem)}} src="http://www.i2symbol.com/images/symbols/punctuation/modifier_letter_plus_sign_u02D6_icon_128x128.png" alt="add button"/>
                : null
            }
        </div>
    )
}
