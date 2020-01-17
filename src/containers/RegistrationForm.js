import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        existingUser: true
    }
    
    loggingIn = () => {
        if(this.state.existingUser === false){
            return this.signUpForm()
        }
    }

    toggleExistingUser = () => {
        this.setState({existingUser: !this.state.existingUser})
    }

    signUpForm = () => {
        return(
            <span>
                <input 
                    className="form-input"
                    onChange={this.handleChange} 
                    value={this.state.first_name}
                    type="text" 
                    name="first_name" 
                    placeholder="First Name" 
                />
                <input 
                    className="form-input"
                    onChange={this.handleChange}
                    value={this.state.last_name} 
                    type="text" 
                    name="last_name" 
                    placeholder="Last Name" 
                />
            </span>
        )
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        this.state.existingUser
            ? this.logIn(request) 
            : this.createUser(request)
        this.setState({
            first_name: "",
            last_name: "",
            username: "",
            password: ""
        })
    }
    
    createUser = (request) => {
        fetch("http://localhost:3000/users", request)
            .then(response => response.json())
            .then(response => {
                if (!response.error) {
                this.logIn(request)
                } 
            })
            .catch(error => console.log(error))
    }
      
    logIn = (request) => {
        fetch("http://localhost:3000/authenticate", request)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('authToken', response.auth_token)
                this.props.setUser(response.user)
            })
            .then(response => {
                this.props.fetchUserWords()
                this.props.history.push('/')
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="signInContainer">
                <div className="signIn">
                    <h3>{this.state.existingUser ? "Log In" : "Sign Up"}</h3>
                    <form className="form" onSubmit={this.handleSubmit}>
                        {this.loggingIn()}
                        <input 
                            className="form-input"
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            value={this.state.username} 
                            onChange={this.handleChange}
                            required
                        />
                        <input 
                            className="form-input"
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleChange}
                            required
                        />
                        <input 
                            type="submit" 
                            value="Register!"
                            className="form-submit"
                        />
                    </form>
                    <h4 onClick={this.toggleExistingUser}>{this.state.existingUser ? "Create an Account" : "Already a User"}</h4>
                </div>
            </div>
        )
    }
}
