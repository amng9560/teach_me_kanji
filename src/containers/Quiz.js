import React, { Component } from 'react'
import QuizRules from '../components/QuizRules'
import KanjiQuiz from '../components/KanjiQuiz'

export default class Quiz extends Component {
    state = {
        currentQuiz: 'Kanji 1 Quiz',
        rules: true
    }

    switchQuiz = (clickedQuiz) => {
        this.setState({
            currentQuiz: clickedQuiz,
            rules: !this.state.rules
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.switchQuiz(event.target.textContent)
    }

    componentDidMount(){
        this.props.getQuestions()
    }

    quiz1Questions = () => {
        return this.props.questions.slice(0,8)
    }

    quiz2Questions = () => {
        return this.props.questions.slice(8, 16)
    }

    quiz3Questions = () => {
        return this.props.questions.slice(16, 24)
    }

    render() {
        const { rules, currentQuiz } = this.state
        const quiz = {
            "Kanji 1 Quiz": <KanjiQuiz questions={this.quiz1Questions()}/>,
            "Kanji 2 Quiz": <KanjiQuiz questions={this.quiz2Questions()}/>,
            "Kanji 3 Quiz": <KanjiQuiz questions={this.quiz3Questions()}/>,
        }
        return (
            <div className="quiz">
                <div className="quiz-buttons">
                    <h3 className="quiz-buttons-links" onClick={this.handleClick}>Kanji 1 Quiz</h3>
                    <h3 className="quiz-buttons-links" onClick={this.handleClick}>Kanji 2 Quiz</h3>
                    <h3 className="quiz-buttons-links" onClick={this.handleClick}>Kanji 3 Quiz</h3>
                </div>
                <div className="quiz-container">
                    {rules 
                        ? <QuizRules />
                        : quiz[currentQuiz]
                    }
                </div>
            </div>
        )
    }
}
