import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion/Accordion";
import Rating from "./components/Rating/Rating/Rating";
import OnOff from "./components/On_Off/ON_OFF";

function App() {
    return (
        <div className="App">
            <Accordion titleValue={`Menu`}/>
            <Accordion titleValue={`Users`}/>
            <Rating value={2}/>
            <OnOff/>
        </div>
    );
}

export default App;
