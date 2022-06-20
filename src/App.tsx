import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion/Accordion";
import Rating from "./components/Rating/Rating/Rating";
import OnOff from "./components/On_Off/ON_OFF";
import ControlledRating from "./components/Rating/Rating/ControlledRating";
import ControlledAccordion from "./components/Accordion/Accordion/ControlledAccordion";
import ControlledON_OFF from "./components/On_Off/ControlledON_OFF";
import Select from "./components/Select/Select";
import DifficultCountingExample from "./components/UseMemo/DifficultCountingExample";
import {Example} from "./components/ReactMemo/Example";
import UsingExampleContainer from "./components/ReactMemo/UsingExampleContainer";
import {HelpForReactMemoExample} from "./components/UseMemo/HelpForReactMemoExample";

export type RatingValueType = 0|1|2|3|4|5
export type OnOffType = "On"|"Off"


function App() {
    console.log("rendering App")
    const [rating,setRating] = useState<RatingValueType>(0)
    const [accordionCollapsed,setAccordionCollapsed ] = useState<boolean>(false)
    const [onOffState,setOnOffState] = useState<OnOffType>("Off")

    const items=['first',"second","third", "forth"]

    return (
        <div className="App">
            {/*Uncontrolled components*/}
            {/*<Accordion titleValue={`Uncontrolled Menu`}/>
            <Accordion titleValue={`Uncontrolled Users`}/>
            <Rating />
            <OnOff/>*/}

            {/*//Controlled components*/}

            {/*<ControlledAccordion items={items} titleValue={"ControlledMenu"} collapsed={accordionCollapsed} setCollapse={setAccordionCollapsed}/>
            <ControlledRating setRating={setRating} rating={rating}/>
            <ControlledON_OFF onOffState={onOffState} setOnOffState={setOnOffState}/>

            <Select />
            <hr/>
            <DifficultCountingExample/>
            <hr/>
            <UsingExampleContainer/>*/}
            <hr/>
            <HelpForReactMemoExample />
        </div>
    );
}

export default App;
