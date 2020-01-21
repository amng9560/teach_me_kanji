import React from 'react'

export default function FinishedQuiz({ questions, wrongAnswers, score, playAgain }) {
    return (
        <div className="quiz-end">
                    <h2>Game Over</h2>
                    <h3>You got {score} out of {questions.length} questions right</h3>
                    <button className="quiz-component-button" onClick={playAgain}>Try Again?</button>
                    <div className="quiz-component-answers">
                        <div className="quiz-component-answers-correct">
                            <h4>Answer Key:</h4>
                            <ol>
                                {questions.map((question, i) => {
                                    return <li key={i} className="quiz-component-choice">
                                        {question.answer}
                                    </li>
                                    })
                                }
                            </ol>
                        </div>
                        <div className="quiz-component-answers-wrong">
                            <h4>Your Answers:</h4>
                            <ol>
                                {wrongAnswers.map((answer, i) => {
                                    return <li key={i} className="quiz-component-choice">
                                        {answer}
                                    </li>
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>
    )
}
