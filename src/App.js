import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom"
import Routes from './Routes'
import Header from './components/Header/Header';


function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        {Routes}
      </div>
    </HashRouter>
  )
}

export default App;
