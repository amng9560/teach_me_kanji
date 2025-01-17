import React from 'react'
import PageNav from './PageNav'
import Home from './Home'
import KanjiContainer from './KanjiContainer'
import Profile from './Profile'
import RegistrationForm from './RegistrationForm'
import Quiz from './Quiz'
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
    resetVideoState,
    getQuestions,
    questions,
    searchTerm,
    updateSearchTerm,
    error,
    setErrorState,
    isError,
    isLoggedIn
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
                            isLoggedIn={isLoggedIn}
                            searchTerm={searchTerm}
                            updateSearchTerm={updateSearchTerm} 
                            words={words} 
                            createWord={createWord} 
                            characters={firstGroup} 
                            setActiveKanji={setActiveKanji} 
                            resetActiveKanji={resetActiveKanji} 
                            toggleVideoState={toggleVideoState} 
                            activeKanji={activeKanji} 
                            toggleVideo={toggleVideo}
                            imageModelURL='/model1/'
                        />)
                    }/>
                    <Route exact path="/kanji_2" render={() =>  (
                        <KanjiContainer
                            isLoggedIn={isLoggedIn}
                            searchTerm={searchTerm}
                            updateSearchTerm={updateSearchTerm}  
                            words={words} 
                            createWord={createWord} 
                            characters={secondGroup} 
                            setActiveKanji={setActiveKanji} 
                            resetActiveKanji={resetActiveKanji} 
                            toggleVideoState={toggleVideoState} 
                            activeKanji={activeKanji} 
                            toggleVideo={toggleVideo}
                            imageModelURL='/model2/'
                        />)
                    }/>
                    <Route exact path="/kanji_3" render={() =>  (
                        <KanjiContainer
                            isLoggedIn={isLoggedIn}
                            searchTerm={searchTerm}
                            updateSearchTerm={updateSearchTerm}  
                            words={words} 
                            createWord={createWord} 
                            characters={thirdGroup} 
                            setActiveKanji={setActiveKanji} 
                            resetActiveKanji={resetActiveKanji} 
                            toggleVideoState={toggleVideoState} 
                            activeKanji={activeKanji} 
                            toggleVideo={toggleVideo}
                            imageModelURL='/model3/'
                        />)
                    }/>
                    <Route exact path="/profile" render={() => (
                        <Profile 
                            userWords={userWords} 
                            deleteUserWord={deleteUserWord} 
                            updateWord={updateWord}
                            searchTerm={searchTerm}
                            updateSearchTerm={updateSearchTerm}
                        />)
                        }/>
                    <Route exact path="/login" render={(props) => (
                        <RegistrationForm 
                            {...props} 
                            setUser={setUser} 
                            fetchUserWords={fetchUserWords}
                            error={error}
                            isError={isError}
                            setErrorState={setErrorState}
                            isLoggedIn={isLoggedIn}
                        />)
                    }/>
                    <Route path="/quiz" render={() => (<Quiz getQuestions={getQuestions} questions={questions}/>)}/>
                </Switch>
            </div>
        </div>
    )
}
