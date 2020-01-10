import React from 'react'
import PageNav from './PageNav'
import Home from './Home'
import KanjiContainer from './KanjiContainer'

import {
    Switch, 
    Route
  } from 'react-router-dom'


export default function Content({ kanji, firstGroup, secondGroup, thirdGroup }) {
    return (
        <div className="content">
            <PageNav />
            <div className="detail">
                <Switch>
                    <Route exact path="/" render={() =>  <Home kanji={kanji}/> }/>
                    <Route exact path="/kanji_1" render={() =>  <KanjiContainer characters={firstGroup}/> }/>
                    <Route exact path="/kanji_2" render={() =>  <KanjiContainer characters={secondGroup}/> }/>
                    <Route exact path="/kanji_3" render={() =>  <KanjiContainer characters={thirdGroup}/> }/>
                </Switch>
            </div>
        </div>
    )
}
