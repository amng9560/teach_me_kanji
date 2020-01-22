import React from 'react'

export default function WordCard ({ wordItem }){
    return (
        <div className="word-list-items">
            <h3>{wordItem.word}</h3>
            <p>{wordItem.meaning}</p>
            <img src="http://www.i2symbol.com/images/symbols/punctuation/modifier_letter_plus_sign_u02D6_icon_128x128.png" alt="add button"/>
        </div>
    )
}
