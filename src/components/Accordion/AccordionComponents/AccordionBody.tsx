import React from 'react';
type AccordionBodyType = {
    items:string[]
}
function AccordionBody(props:AccordionBodyType) {

    const itemList = props.items.map((i,index)=><div key={index}>{i}</div>)
    return (
        <div>
            {itemList}
        </div>

    );
}

export default AccordionBody;