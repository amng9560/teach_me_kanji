import React from 'react'
import PageNav from './PageNav'
import Home from './Home'
import Kanji1 from './Kanji1'
import {
    BrowserRouter as Router, 
    Switch, 
    Route
  } from 'react-router-dom'
export default function Content() {
    return (
        <div className="content">
            <Router>
                <PageNav />
                <div className="detail">
                    <Switch>
                        <Route path="/" render={() =>  <Home /> }/>
                        <Route path="/" render={() =>  <Kanji1 /> }/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
