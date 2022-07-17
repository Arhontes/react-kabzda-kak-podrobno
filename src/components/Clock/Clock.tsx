import React, {useEffect, useState} from 'react';
import DigitClockView from "./DigitClockView";
import {AnalogClockView} from "./AnalogClockView";


export type ClockViewPropsType = { date: Date }

export type ClockPropsType = {mode:"analog"|"digit"}

export const Clock = (props:ClockPropsType) => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            {props.mode==="analog"?<AnalogClockView date={date}/>:<DigitClockView date={date}/>}

        </div>
    )
}

