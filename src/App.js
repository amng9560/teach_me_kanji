import React, { Component } from 'react';
import './App.css';
import './styles/style.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Content from './components/Content'
import UserNav from './components/UserNav'

class App extends Component {
  state = {
    kanji: [],
    characters: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/kanjis')
      .then(response => response.json())
      .then(kanji => {
        this.setState({ 
          kanji,
          characters: kanji.map(characters => characters.characters.flat())
        })
      })
  }

  render(){
    const { characters } = this.state
    const characterArray = characters.flat()
    const firstGroupOfCharacters = characterArray.slice(0, 17)
    const secondGroupOfCharacters = characterArray.slice(17, 34)
    const thirdGroupOfCharacters = characterArray.slice(34, 51)
    return (
      <Router> 
        <div className="App">
          <UserNav />
          <Content 
            firstGroup={firstGroupOfCharacters} 
            secondGroup={secondGroupOfCharacters} 
            thirdGroup={thirdGroupOfCharacters}
            kanji={this.state.kanji}
          />
        </div>
      </Router>
    );
  }
}

export default App;
