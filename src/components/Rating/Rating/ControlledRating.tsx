import React, {useState} from 'react';
import Star from "../RatingComponent/Star/Star";

export type RatingValueType = 0|1|2|3|4|5

export type RatingPropsType={
    value:RatingValueType
}
function Rating() {

    let [rating,setRating] = useState<RatingValueType>(0)


    return (
        <div>
            <Star setRating={()=>setRating(1)} selected={rating>0}/>
            <Star setRating={()=>setRating(2)} selected={rating>1}/>
            <Star setRating={()=>setRating(3)} selected={rating>2}/>
            <Star setRating={()=>setRating(4)} selected={rating>3}/>
            <Star setRating={()=>setRating(5)} selected={rating>4}/>
        </div>
    );
}

export default Rating;