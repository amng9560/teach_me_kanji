import React from 'react'
import PageNav from './PageNav'
import Home from './Home'
import KanjiContainer from '../components/KanjiContainer'

import {
    Switch, 
    Route
  } from 'react-router-dom'


export default function Content({ kanji, firstGroup, secondGroup, thirdGroup, createWord, words }) {
    return (
        <div className="content">
            <PageNav />
            <div className="detail">
                <Switch>
                    <Route exact path="/" render={() =>  <Home kanji={kanji}/> }/>
                    <Route exact path="/kanji_1" render={() =>  <KanjiContainer words={words} createWord={createWord} characters={firstGroup}/> }/>
                    <Route exact path="/kanji_2" render={() =>  <KanjiContainer words={words} createWord={createWord} characters={secondGroup}/> }/>
                    <Route exact path="/kanji_3" render={() =>  <KanjiContainer words={words} createWord={createWord} characters={thirdGroup}/> }/>
                </Switch>
            </div>
        </div>
    )
}
