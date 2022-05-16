import React from 'react';
import style from './Star.module.css'

export type StarPropsType={
    selected: boolean,
    setRating: ()=>void
}
function Star({selected=false,...props}:StarPropsType) {
    const starStyle = selected?style.selectedStar:""
    const onClickHandler =()=>{

    }
    return (
        <span onClick={()=>props.setRating()} className={starStyle}> Star </span>
    );
}

export default Star;