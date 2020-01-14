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


export default function Content({ kanji, firstGroup, secondGroup, thirdGroup, createWord, words, setUser }) {
    return (
        <div className="content">
            <PageNav />
            <div className="detail">
                <Switch>
                    <Route exact path="/" render={() =>  <Home kanji={kanji}/> }/>
                    <Route exact path="/kanji_1" render={() =>  <KanjiContainer words={words} createWord={createWord} characters={firstGroup}/> }/>
                    <Route exact path="/kanji_2" render={() =>  <KanjiContainer words={words} createWord={createWord} characters={secondGroup}/> }/>
                    <Route exact path="/kanji_3" render={() =>  <KanjiContainer words={words} createWord={createWord} characters={thirdGroup}/> }/>
                    <Route exact path="/profile" render={() => <Profile />} />
                    <Route exact path="/login" render={(props) => <RegistrationForm {...props} setUser={setUser}/>} />
                </Switch>
            </div>
        </div>
    )
}
