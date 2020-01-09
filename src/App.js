import React from 'react';
import './App.css';
import './styles/style.css'
import Content from './components/Content'
import UserNav from './components/UserNav'

function App() {
  return (
    <div className="App">
      <UserNav />
      <Content />
    </div>
  );
}

export default App;
