import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion/Accordion";
import Rating from "./components/Rating/Rating/Rating";
import OnOff from "./components/On_Off/ON_OFF";
import ControlledRating from "./components/Rating/Rating/ControlledRating";
import ControlledAccordion from "./components/Accordion/Accordion/ControlledAccordion";
import ControlledON_OFF from "./components/On_Off/ControlledON_OFF";

export type RatingValueType = 0|1|2|3|4|5
export type OnOffType = "On"|"Off"


function App() {
    console.log("rendering App")
    const [rating,setRating] = useState<RatingValueType>(0)
    const [accordionCollapsed,setAccordionCollapsed ] = useState<boolean>(false)
    const [onOffState,setOnOffState] = useState<OnOffType>("Off")
    return (
        <div className="App">
            {/*Uncontrolled components*/}
            <Accordion titleValue={`Uncontrolled Menu`}/>
            <Accordion titleValue={`Uncontrolled Users`}/>
            <Rating />
            <OnOff/>

            {/*//Controlled components*/}

            <ControlledAccordion titleValue={"ControlledMenu"} collapsed={accordionCollapsed} setCollapse={setAccordionCollapsed}/>
            <ControlledRating setRating={setRating} rating={rating}/>
            <ControlledON_OFF onOffState={onOffState} setOnOffState={setOnOffState}/>
        </div>
    );
}

export default App;
