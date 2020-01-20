import React from 'react'
import WordContainer from '../components/WordContainer'
import KanjiCard from '../components/KanjiCard'
import KanjiInfo from '../components/KanjiInfo'
import Ml5Video from '../components/Ml5Video'

export default function KanjiContainer ({ 
    characters,
    createWord, 
    words,
    setActiveKanji, 
    resetActiveKanji, 
    toggleVideoState, 
    activeKanji, 
    toggleVideo,
    imageModelURL  
    }) 
{
    const characterContainer = () => {
        return characters.flat().map((character, i) => {
            return <KanjiCard key={i} character={character} toggleKanji={setActiveKanji}/>
        })
    }

    return (
        <div className="kanji-1">
            <div className="kanji-1-container">
                {activeKanji === null
                    ?<div className="kanji-1-characters">
                        {characterContainer()}
                    </div>
                    : <KanjiInfo kanji={activeKanji} goBack={resetActiveKanji}/>
                }
                <div className="kanji-1-video-container">
                    <button onClick={toggleVideoState} className="kanji-1-button">Toggle Video</button>
                    { toggleVideo
                        ? <Ml5Video imageModelURL={imageModelURL}/>
                        : null
                    } 
                </div>
            </div>
            <WordContainer words={words} createWord={createWord} />
        </div>
    ) 
}
