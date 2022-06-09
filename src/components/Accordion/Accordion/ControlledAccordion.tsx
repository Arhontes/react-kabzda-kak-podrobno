import React, {useState} from 'react';
import AccordionTitle from "../AccordionComponents/AccordionTitle";
import AccordionBody from "../AccordionComponents/AccordionBody";

export type AccordionPropsType = {
    titleValue: string,
    setCollapse: (props:boolean)=>void
    collapsed:boolean
    items:string[]
}

function ControlledAccordion({titleValue,setCollapse,collapsed,...restProps}:AccordionPropsType) {
    return (
            <div>
                <AccordionTitle setCollapse={()=>setCollapse(!collapsed)} title={titleValue}/>
                {!collapsed &&  <AccordionBody items={restProps.items}/>}
            </div>

    );
}

export default ControlledAccordion;