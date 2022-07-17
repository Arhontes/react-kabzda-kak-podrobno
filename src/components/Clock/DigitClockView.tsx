import React from 'react';
import {ClockViewPropsType} from "./Clock";

export const correctClockView = (unit: number) => unit < 10 ? `${0}${unit}` : unit

const DigitClockView = (props:ClockViewPropsType) => {
    const seconds = props.date.getSeconds()
    const minutes = props.date.getMinutes()
    const hours = props.date.getHours()
    return (
        <div>
            <span>{correctClockView(hours)}:</span>
            <span>{correctClockView(minutes)}:</span>
            <span>{correctClockView(seconds)}</span>
            </div>
    );
};

export default DigitClockView;