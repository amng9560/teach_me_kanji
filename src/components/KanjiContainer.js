import React, { Component } from 'react'
import WordContainer from './WordContainer'
import KanjiCard from './KanjiCard'
import KanjiInfo from './KanjiInfo'

export default class KanjiContainer extends Component {
    state = {
        activeKanji: null
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

    characterContainer = () => {
        return this.props.characters.flat().map((character, i) => {
            return <KanjiCard key={i} character={character} toggleKanji={this.setActiveKanji}/>
        })
    }
    render(){
        const { createWord, words } = this.props
        return (
            <div className="kanji-1">
                    {this.state.activeKanji === null
                        ?<div className="kanji-1-characters">
                          {this.characterContainer()}
                        </div>
                        : <KanjiInfo kanji={this.state.activeKanji} goBack={this.resetActivKanji}/>
                    }
            
                <WordContainer words={words} createWord={createWord} />
            </div>
        )
    }
}
