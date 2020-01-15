import React, { Component } from 'react'

export default class WordForm extends Component {
    state = {
        word: "",
        meaning: ""
    }

    componentDidMount(){
        this.props.defaultValues && this.setState(this.props.defaultValues)
    }

    handleChange = (event) => {
        const { name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { submitHandler, toggleForm } = this.props
        if (toggleForm) {
            toggleForm()
        }
        submitHandler(this.state)
        this.setState({
            word: "",
            meaning: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-word-form">
                <h3>Add A Word!</h3>
                <input
                    className="add-word-form-input"
                    type="text" 
                    onChange={this.handleChange} 
                    value={this.state.word}
                    name="word"
                    placeholder="山陰, 田畑, etc"
                    required
                />
                <input
                    className="add-word-form-input" 
                    type="text" 
                    onChange={this.handleChange} 
                    value={this.state.meaning}
                    name="meaning"
                    placeholder="Place of shade, rice field, etc"
                    required
                />
                <input className="add-word-form-submit" type="submit" value="Add a Word!"/>
            </form>
        )
    }
}
