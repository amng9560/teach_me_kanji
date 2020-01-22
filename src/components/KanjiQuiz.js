import React, { Component } from 'react'
import FinishedQuiz from './FinishedQuiz'
import QuizComponent from './QuizComponent'

export default class KanjiQuiz extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd: false,
        score: 0,
        disabled: true,
        wrongAnswers: [],
    }

    loadQuiz = () => {
        const { currentQuestion } = this.state
        this.setState(() => {
            return{
                question: this.props.questions[currentQuestion].character.meaning,
                options: this.props.questions[currentQuestion].options,
                answers: this.props.questions[currentQuestion].answer
            }
        })
    }

    playAgain = () => {
        this.loadQuiz()
        this.setState({
            userAnswer: null,
            currentQuestion: 0,
            quizEnd: false,
            score: 0
        })
    }

    componentDidMount(){
        this.loadQuiz()
    }
    
    displayOptions = () => {
        const { options, userAnswer } = this.state
        return options.map((option, i) => {
            return <p 
                key={i}
                onClick={() => this.checkAnswer(option.option)} 
                className={`quiz-component-choice 
                ${userAnswer === option.option ? 'selected' : null}
                `}
            >
                {option.option}
            </p>
        })
    }

    componentDidUpdate(prevProps, prevState){
        const { currentQuestion } = this.state
        if(currentQuestion !== prevState.currentQuestion){
            this.setState(() => {
                return{
                    disabled: true,
                    question: this.props.questions[currentQuestion].character.meaning,
                    options: this.props.questions[currentQuestion].options,
                    answers: this.props.questions[currentQuestion].answer,
                    userAnswer: null
                }
            })
        }
    }

    nextHandler = () => {
        const { currentQuestion, } = this.state
        this.setState({
            currentQuestion: currentQuestion + 1
        })
        this.verifyAnswer()
    }

    checkAnswer = (answer) => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    finishHandler = () => {
        const { currentQuestion, } = this.state
        const { questions } = this.props
        if(currentQuestion === questions.length - 1){
            this.setState({
                quizEnd: true
            })
        }
        this.verifyAnswer()
    }

    verifyAnswer = () => {
        const { userAnswer, answers, score } = this.state
        if(userAnswer === answers) {
            this.setState({
                score: score + 1,
                wrongAnswers: [...this.state.wrongAnswers, "✔️"]
            })
        } else {
            this.setState ({
                wrongAnswers: [...this.state.wrongAnswers, userAnswer]
            })
        }
    }

    render() {
        const { question, currentQuestion, quizEnd, score, wrongAnswers, disabled } = this.state
        const { questions } = this.props

        return (!quizEnd
            ? <QuizComponent 
                question={question} 
                score={score}
                currentQuestion={currentQuestion}
                questions={questions}
                displayOptions={this.displayOptions()}
                disabled={disabled}
                nextHandler={this.nextHandler}
                finishHandler={this.finishHandler}
            />
            : <FinishedQuiz 
                questions={questions} 
                playAgain={this.playAgain} 
                wrongAnswers={wrongAnswers} 
                score={score}
            />
        )
    }
}
