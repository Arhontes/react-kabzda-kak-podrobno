import React, {useEffect, useState} from 'react';

type ClockPropsType = {}
const correctClockView = (unit:number) => unit<10? `${0}${unit}`:unit

const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()



    return (
        <div>


            <span>{correctClockView(hours)}:</span>
            <span>{correctClockView(minutes)}:</span>
            <span>{correctClockView(seconds)}</span>
        </div>
    );
};

export default Clock;