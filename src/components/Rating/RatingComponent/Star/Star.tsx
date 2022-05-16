import React from 'react';
import style from './Star.module.css'
export type StarPropsType={
    selected: boolean
}
function Star({selected=false}:StarPropsType) {
    const starStyle = selected?style.selectedStar:""
    return (
        <span className={starStyle}> Star </span>
    );
}

export default Star;