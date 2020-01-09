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
      .then(response => response.json)
      .then(console.log)
  }

  render(){
    return (
      <Router>
        <div className="App">
          <UserNav />
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
