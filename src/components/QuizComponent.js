import React from 'react'

export default function QuizComponent({ 
    questions, 
    score, 
    question, 
    displayOptions, 
    currentQuestion, 
    disabled, 
    nextHandler, 
    finishHandler 
}) {
    return (
        <div className="quiz-component">
                <span className="quiz-component-score">
                    <h4 className="current-score" >Current Score:</h4>
                    <h4 className="score">{score}</h4>
                </span>
                <h3>Meaning: {question}</h3>
                <span className="quiz-component-counter">{`Question ${currentQuestion + 1} out of ${questions.length}`}</span>
                <div className="quiz-component-options">
                    {displayOptions}
                </div>
                {currentQuestion < questions.length -1 &&
                    <button 
                        disabled={disabled} 
                        onClick={nextHandler}
                        className="quiz-component-button"
                    >
                        Next
                    </button>
                }
                {currentQuestion === questions.length -1 &&
                    <button 
                        disabled={disabled} 
                        onClick={finishHandler}
                        className="quiz-component-button"
                    >
                        Finish
                    </button>
                }
            </div>
    )
}
