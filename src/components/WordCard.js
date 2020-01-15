import React, { Component } from 'react'

export default class WordCard extends Component {
    render() {
        const { wordItem} = this.props
        return (
            <div className="word-list-items">
                <h3>{wordItem.word}</h3>
                <p>{wordItem.meaning}</p>
            </div>
        )
    }
}
