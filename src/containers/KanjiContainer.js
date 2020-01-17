import React, { Component } from 'react'
import WordContainer from '../components/WordContainer'
import KanjiCard from '../components/KanjiCard'
import KanjiInfo from '../components/KanjiInfo'

export default class KanjiContainer extends Component {
    state = {
        activeKanji: null,
        toggleVideo: false
    }

    setActiveKanji = (kanji) => {
        this.setState({
            activeKanji: kanji
        })
    }
    
    resetActivKanji = () => {
        this.setState({
            activeKanji: null
        })
    }

    toggleVideoState = () => {
        this.setState({
            toggleVideo: !this.state.toggleVideo
        })
    }

    characterContainer = () => {
        return this.props.characters.flat().map((character, i) => {
            return <KanjiCard key={i} character={character} toggleKanji={this.setActiveKanji}/>
        })
    }
    render(){
        const { createWord, words, loading } = this.props
        const { activeKanji, toggleVideo } = this.state
        return (
            <div className="kanji-1">
                <div className="kanji-1-container">
                    {activeKanji === null
                        ?<div className="kanji-1-characters">
                          {this.characterContainer()}
                        </div>
                        : <KanjiInfo kanji={activeKanji} goBack={this.resetActivKanji}/>
                    }
                    <div className="kanji-1-video-container">
                        <button onClick={this.toggleVideoState} className="kanji-1-button">Toggle Video</button>
                        { toggleVideo
                            ? <div className="kanji-1-video"></div>
                            : null
                        }
                    </div>
                </div>
                <WordContainer loading={loading} words={words} createWord={createWord} />
            </div>
        )
    }
}
