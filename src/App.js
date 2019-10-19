import React from 'react';
import './App.css';
import MenuBar from './components/menubar/menubar';
import Router from './config/router/router';



function App() {
  return (
    <div className="App">
       <MenuBar></MenuBar>
       
       <Router></Router>
    </div>
  )
}

export default App;
