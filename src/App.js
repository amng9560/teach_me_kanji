import React, { Component } from 'react';
import './App.css';
import './styles/style.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Content from './containers/Content'
import UserNav from './containers/UserNav'

const BASE_URL = 'http://localhost:3000/'

class App extends Component {
  state = {
    kanji: [],
    characters: [],
    words: []
  }

  componentDidMount(){
    fetch(`${BASE_URL}kanjis`)
      .then(response => response.json())
      .then(kanji => {
        this.setState({ 
          kanji,
          characters: kanji.map(characters => characters.characters).flat()
        })
      })
    fetch(`${BASE_URL}words`)
      .then(response => response.json())
      .then(words => {
        this.setState({ words })
      })
  }

  fetchCall = (url, method, body) => {
    const headers = {
        "Content-Type": "application/json",
    }
    return fetch(url, {method, headers, body})
  }

  createWord = (word) => {
    const body = JSON.stringify({...word})
    return this.fetchCall(`${BASE_URL}words`, "POST", body)
      .then(response => response.json())
      .then(word => {
        this.setState({
          words: [...this.state.words, word]
        }) 
      })
  }

  render(){
    const { characters, words } = this.state
    const firstGroupOfCharacters = characters.slice(0, 17)
    const secondGroupOfCharacters = characters.slice(17, 34)
    const thirdGroupOfCharacters = characters.slice(34, 51)
    return (
      <Router> 
        <div className="App">
          <UserNav />
          <Content
            words={words}
            firstGroup={firstGroupOfCharacters} 
            secondGroup={secondGroupOfCharacters} 
            thirdGroup={thirdGroupOfCharacters}
            createWord={this.createWord}
            kanji={this.state.kanji}
          />
        </div>
      </Router>
    );
  }
}

export default App;
