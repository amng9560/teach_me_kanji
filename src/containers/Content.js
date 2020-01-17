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


export default function Content({ 
    kanji, 
    firstGroup, 
    secondGroup, 
    thirdGroup, 
    createWord, 
    words, 
    setUser, 
    fetchUserWords, 
    userWords, 
    deleteUserWord, 
    updateWord, 
    setActiveKanji, 
    resetActiveKanji, 
    toggleVideoState, 
    activeKanji, 
    toggleVideo,
    resetVideoState
    }) 
{
    return (
        <div className="content">
            <PageNav resetActiveKanji={resetActiveKanji} resetVideoState={resetVideoState}/>
            <div className="detail">
                <Switch>
                    <Route exact path="/" render={() =>  <Home kanji={kanji}/> }/>
                    <Route exact path="/kanji_1" render={() =>  ( 
                        <KanjiContainer  
                            words={words} 
                            createWord={createWord} 
                            characters={firstGroup} 
                            setActiveKanji={setActiveKanji} 
                            resetActiveKanji={resetActiveKanji} 
                            toggleVideoState={toggleVideoState} 
                            activeKanji={activeKanji} 
                            toggleVideo={toggleVideo}
                        />)
                    }/>
                    <Route exact path="/kanji_2" render={() =>  (
                        <KanjiContainer 
                            words={words} 
                            createWord={createWord} 
                            characters={secondGroup} 
                            setActiveKanji={setActiveKanji} 
                            resetActiveKanji={resetActiveKanji} 
                            toggleVideoState={toggleVideoState} 
                            activeKanji={activeKanji} 
                            toggleVideo={toggleVideo}
                        />)
                    }/>
                    <Route exact path="/kanji_3" render={() =>  (
                        <KanjiContainer 
                            words={words} 
                            createWord={createWord} 
                            characters={thirdGroup} 
                            setActiveKanji={setActiveKanji} 
                            resetActiveKanji={resetActiveKanji} 
                            toggleVideoState={toggleVideoState} 
                            activeKanji={activeKanji} 
                            toggleVideo={toggleVideo}
                        />)
                    }/>
                    <Route exact path="/profile" render={() => <Profile userWords={userWords} deleteUserWord={deleteUserWord} updateWord={updateWord}/>} />
                    <Route exact path="/login" render={(props) => <RegistrationForm {...props} setUser={setUser} fetchUserWords={fetchUserWords}/>} />
                </Switch>
            </div>
        </div>
    )
}
