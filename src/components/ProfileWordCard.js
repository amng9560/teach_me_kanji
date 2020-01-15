import React, { Component } from 'react'
import WordForm from './WordForm'

export default class ProfileWordCard extends Component {
    state = {
        showForm: false
    }

    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    submitHandler = (word) => {
        this.props.updateWord(this.props.userWord.id, word)
    }

    render() {
        const { userWord, deleteUserWord } = this.props
        const { word, meaning } = userWord
        return (
            <>
                <div className="profile-word-list-items">
                    <h3>{userWord.word}</h3>
                    <p>{userWord.meaning}</p>
                    <img 
                        className='profile-word-list-items-edit'
                        onClick={this.toggleForm}
                        src='https://image.flaticon.com/icons/svg/1159/1159633.svg' 
                        alt='update button'
                    />
                    <img 
                        className='profile-word-list-items-delete' 
                        onClick={() => deleteUserWord(userWord)} 
                        src='https://image.flaticon.com/icons/svg/59/59836.svg' 
                        alt='delete button'
                    />
                </div>
                <div className="profile-word-list-form">
                    {this.state.showForm
                        ? <WordForm
                            toggleForm={this.toggleForm}
                            submitHandler={this.submitHandler}
                            defaultValues={{ word, meaning }}
                        />
                        : null
                    }
                </div>
            </>
        )
    }
}
