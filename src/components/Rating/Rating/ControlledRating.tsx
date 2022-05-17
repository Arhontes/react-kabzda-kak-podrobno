import React, {useState} from 'react';
import Star from "../RatingComponent/Star/Star";
import {RatingValueType} from "../../../App";
import ControlledStar from "../RatingComponent/Star/ControlledStar";


export type RatingPropsType={
    rating:RatingValueType
    setRating: (props:RatingValueType)=>void
}
function Rating({rating,setRating}:RatingPropsType) {

    return (
        <div>
            <ControlledStar setRating={()=>setRating(1)} selected={rating>0}/>
            <ControlledStar setRating={()=>setRating(2)} selected={rating>1}/>
            <ControlledStar setRating={()=>setRating(3)} selected={rating>2}/>
            <ControlledStar setRating={()=>setRating(4)} selected={rating>3}/>
            <ControlledStar setRating={()=>setRating(5)} selected={rating>4}/>
        </div>
    );
}

export default Rating;