import React, {useState} from 'react';
import s from './ON_OFF.module.css'
function OnOff() {
    let [on_offState,setOn_OffState] = useState<boolean>(false)
    const onClickHandler=()=>{
        setOn_OffState(!on_offState)
    }

    const vkl = on_offState?s.turnOn:s.turnOff

    return (
        <div>

            <div className={vkl} onClick={onClickHandler}>ON</div>
            <div className={vkl} onClick={onClickHandler}>OFF</div>
            <div className={s.indicator}> </div>
        </div>
    );
}

export default OnOff;