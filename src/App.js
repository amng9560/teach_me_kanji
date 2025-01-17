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
    user: false,
    isError: false,
    error: '',
    kanji: [],
    characters: [],
    words: [],
    userWords: [],
    activeKanji: null,
    toggleVideo: false,
    questions: [],
    searchTerm: '',
  }

  componentWillMount(){
    if(localStorage.getItem('authToken')){
      return fetch(`${BASE_URL}validate`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('authToken')
        }
      })
      .then(response => response.json())
      .then(user => {
        this.setState({ user })
      })
      .then(() => {
        this.fetchUserWords()
      })
      .then(() => {
        this.setState({
          loading: false
        })
      })
    }
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
      this.getQuestions()
  }

  setErrorState = (error) => {
    this.setState({
      isError: true,
      error: error.error
    })
  }

  setActiveKanji = (kanji) => {
    this.setState({
        activeKanji: kanji
    })
  }

  resetActiveKanji = () => {
      this.setState({
          activeKanji: null
      })
  }

  toggleVideoState = () => {
      this.setState({
          toggleVideo: !this.state.toggleVideo
      })
  }

  resetVideoState = () => {
    this.setState({
      toggleVideo: false
    })
  }

  setUser = (response) => {
    return (
      localStorage.getItem('authToken')
        ? this.setState({user: response})
        : null
    )
  }

  logOutUser = () => {
    localStorage.removeItem('authToken')
    this.setState({
      user: false,
      userWords: []
    })
  }

  fetchCall = (url, method, body) => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('authToken')
    }
    return fetch(url, {method, headers, body})
  }

  createWord = (word) => {
    const { user } = this.state
    const body = JSON.stringify({...word, user_id: user.id})
    return this.fetchCall(`${BASE_URL}words`, "POST", body)
      .then(response => response.json())
      .then(word =>{
        if(word.word.trim().length !== 0 && word.meaning.trim().length !== 0 ){
          this.setWordState(word)
        }
      })
  }

  setWordState = (word) => {
    const { words, userWords, user } = this.state
    if(this.filterWords(words, word).length === 0){
      this.setState({
        words: [...words, word],
        loading: false,
      })
    }
    if(this.filterWords(userWords, word).length === 0 && user){
      this.setState({
        userWords: [...userWords, word]
      })
    }
  }

  filterWords = (state, givenWord) => {
    return state.filter(item => item.word === givenWord.word)
  }

  fetchUserWords = () => {
    const { user } = this.state
    return this.fetchCall(`${BASE_URL}users/${user.id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          userWords: response.words
        })
      })
  }
  
  deleteUserWord = (word) => {
    const { user } = this.state
    const body = JSON.stringify({user: {user_id: user.id, removeword: word.id}})
    const newState = this.state.userWords.filter(userWord => userWord.id !== word.id)
    this.setState({ userWords: newState })

    return this.fetchCall(`${BASE_URL}users/${user.id}?removeword=${word.id}`, "PATCH", body)
  }

  updateWord = (id, word) => {
    const body = JSON.stringify({...word})
    return this.fetchCall(`${BASE_URL}words/${id}`, "PATCH", body)
      .then(() => {
        this.setState({
          words: [...this.state.words.map(
            existingWord => this.updatingWordState(existingWord, id, word)
            )
          ],
          userWords: [...this.state.userWords.map(
            existingWord => this.updatingWordState(existingWord, id, word)
            )
          ],
          loading: false,
        })
      })
  }

  updatingWordState = (existingWord, id, word) => {
    if(existingWord.id === id){
      return Object.assign(existingWord, word)
    } else {
     return existingWord
    }
  }

  getQuestions = () => {
    fetch(`${BASE_URL}questions`)
      .then(response => response.json())
      .then(questions => {
        this.setState({ questions })
      })
  }

  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterSearchWord = () => {
    const { words, searchTerm } = this.state
    return words.filter(word => {
      return (
        word.word.includes(searchTerm) ||
        word.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }

  filterUserWords = () => {
    const {　userWords, searchTerm } = this.state
    return　userWords.filter(word => {
      return (
        word.word.includes(searchTerm) ||
        word.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }

  filterForWords = (word, searchTerm) => {
    return(
      word.word.includes(searchTerm) ||
      word.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  render(){
    const { characters, user, activeKanji, toggleVideo, questions, searchTerm, error, isError } = this.state
    const firstGroupOfCharacters = characters.slice(0, 17)
    const secondGroupOfCharacters = characters.slice(17, 34)
    const thirdGroupOfCharacters = characters.slice(34, 51)
    return (
      <Router> 
        <div className="App">
          <UserNav loggedInUser={user} logOutUser={this.logOutUser}/>
            <Content
              words={this.filterSearchWord()}
              firstGroup={firstGroupOfCharacters} 
              secondGroup={secondGroupOfCharacters} 
              thirdGroup={thirdGroupOfCharacters}
              createWord={this.createWord}
              kanji={this.state.kanji}
              setUser={this.setUser}
              fetchUserWords={this.fetchUserWords}
              userWords={this.filterUserWords()}
              deleteUserWord={this.deleteUserWord}
              updateWord={this.updateWord}
              setActiveKanji={this.setActiveKanji}
              resetActiveKanji={this.resetActiveKanji}
              toggleVideoState={this.toggleVideoState}
              activeKanji={activeKanji}
              toggleVideo={toggleVideo}
              resetVideoState={this.resetVideoState}
              getQuestions={this.getQuestions}
              questions={questions}
              searchTerm={searchTerm}
              updateSearchTerm={this.updateSearchTerm}
              error={error}
              isError={isError}
              setErrorState={this.setErrorState}
              isLoggedIn={user}
          />
        </div>
      </Router>
    );
  }
}

export default App;
