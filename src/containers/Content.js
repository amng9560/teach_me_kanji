import React from 'react'
import PageNav from './PageNav'
import Home from './Home'
import KanjiContainer from './KanjiContainer'
import Profile from './Profile'
import RegistrationForm from './RegistrationForm'

import {
    Switch, 
    Route
  } from 'react-router-dom'


export default function Content({ kanji, firstGroup, secondGroup, thirdGroup, createWord, words, setUser, fetchUserWords, userWords, deleteUserWord, updateWord, loading }) {
    return (
        <div className="content">
            <PageNav />
            <div className="detail">
                <Switch>
                    <Route exact path="/" render={() =>  <Home kanji={kanji}/> }/>
                    <Route exact path="/kanji_1" render={() =>  <KanjiContainer loading={loading}  words={words} createWord={createWord} characters={firstGroup}/> }/>
                    <Route exact path="/kanji_2" render={() =>  <KanjiContainer loading={loading} words={words} createWord={createWord} characters={secondGroup}/> }/>
                    <Route exact path="/kanji_3" render={() =>  <KanjiContainer loading={loading} words={words} createWord={createWord} characters={thirdGroup}/> }/>
                    <Route exact path="/profile" render={() => <Profile loading={loading} userWords={userWords} deleteUserWord={deleteUserWord} updateWord={updateWord}/>} />
                    <Route exact path="/login" render={(props) => <RegistrationForm {...props} setUser={setUser} fetchUserWords={fetchUserWords}/>} />
                </Switch>
            </div>
        </div>
    )
}
