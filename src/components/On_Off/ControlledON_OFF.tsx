import React, {useState} from 'react';
import s from './ON_OFF.module.css'
import {OnOffType} from "../../App";

type UncontrolledOnOffPropsType = {
    onOffState: OnOffType,
    setOnOffState: (state:OnOffType)=>void
}

function UncontrolledOnOff({onOffState, setOnOffState}:UncontrolledOnOffPropsType) {


    const boxStyle={
        width: "50px",
        height: "30px",
        border: "solid black 1px",
        margin: "2px",
        paddingTop:"5px",
    }
    const boxOnStyle ={
        ...boxStyle,
        backgroundColor: onOffState==="On"?"green":"white"

    }
    const boxOffStyle ={
        ...boxStyle,
        backgroundColor: onOffState==="On"?"white":"red"
    }
    const indicatorStyle={
        width: "20px",
        height: "20px",
        border: "solid black 2px",
        borderRadius: "50%",
        backgroundColor: onOffState==="On"?"green":"red"
    }
    const onClickHandler=()=>{
        onOffState==="Off"?setOnOffState("On"):setOnOffState("Off")
    }
    return (
        <div className={s.onOffContainer}>

            <div style={boxOnStyle} onClick={onClickHandler}>ON</div>
            <div style={boxOffStyle} onClick={onClickHandler}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default UncontrolledOnOff;