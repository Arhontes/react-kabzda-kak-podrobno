import React, {useState} from 'react';
import s from './ON_OFF.module.css'
function OnOff() {
    let [on_offState,setOn_OffState] = useState<boolean>(false)
    const onClickHandler=()=>{
        setOn_OffState(!on_offState)
    }
    const boxStyle={
        width: "50px",
        height: "30px",
        border: "solid black 1px",
        margin: "2px",
        paddingTop:"5px",
    }
    const boxOnStyle ={
        ...boxStyle,
        backgroundColor: on_offState?"green":"white"

    }
    const boxOffStyle ={
        ...boxStyle,
        backgroundColor: on_offState?"white":"red"
    }
    const indicatorStyle={
        width: "20px",
        height: "20px",
        border: "solid black 2px",
        borderRadius: "50%",
        backgroundColor: on_offState?"green":"red"
    }
    return (
        <div className={s.onOffContainer}>

            <div style={boxOnStyle} onClick={onClickHandler}>ON</div>
            <div style={boxOffStyle} onClick={onClickHandler}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;