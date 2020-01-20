import React, { Component } from 'react'

export default class Quiz extends Component {
    componentDidMount(){
        this.props.getQuestions()
    }

    render() {
        return (
            <div className="quiz">
                
            </div>
        )
    }
}
