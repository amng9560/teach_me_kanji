import React from 'react'
import PageNav from './PageNav'
import Home from './Home'
import Kanji1 from './Kanji1'
import {
    Switch, 
    Route
  } from 'react-router-dom'


export default function Content() {
    return (
        <div className="content">
            <PageNav />
            <div className="detail">
                <Switch>
                    <Route exact path="/" render={() =>  <Home /> }/>
                    <Route exact path="/kanji_1" render={() =>  <Kanji1 /> }/>
                    <Route exact path="/kanji_2" render={() =>  <Kanji1 /> }/>
                    <Route exact path="/kanji_3" render={() =>  <Kanji1 /> }/>
                </Switch>
            </div>
        </div>
    )
}
