import React from 'react';
import {ClockViewPropsType} from "./Clock";
import style from "./clock.module.css"
export const AnalogClockView = (props:ClockViewPropsType) => {
    const seconds = props.date.getSeconds()
    const minutes = props.date.getMinutes()
    const hours = props.date.getHours()
    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
            <div className={style.clock}>
                <h3>Clock</h3>
                <div className={style.analogClock}>
                    <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
                    <div className={`${style.dial} ${style.minutes}`} style={minutesStyle}/>
                    <div className={`${style.dial} ${style.hours}`}style={hoursStyle}/>
                </div>
            </div>
    );
};

