import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion/Accordion";
import Rating from "./components/Rating/Rating/Rating";
import OnOff from "./components/On_Off/ON_OFF";
import ControlledRating from "./components/Rating/Rating/ControlledRating";

export type RatingValueType = 0|1|2|3|4|5

function App() {

    const [rating,setRating] = useState<RatingValueType>(0)


    return (
        <div className="App">
            <Accordion titleValue={`Menu`}/>
            <Accordion titleValue={`Users`}/>
            <Rating />
            <ControlledRating setRating={setRating} rating={rating}/>
            <OnOff/>
        </div>
    );
}

export default App;
