import React, {useState} from 'react';
import AccordionTitle from "../AccordionComponents/AccordionTitle";
import AccordionBody from "../AccordionComponents/AccordionBody";

export type AccordionPropsType = {
    titleValue: string,
    setCollapse: (props:boolean)=>void
    collapsed:boolean
}

function ControlledAccordion({titleValue,setCollapse,collapsed}:AccordionPropsType) {


    return (

            <div>
                <AccordionTitle setCollapse={()=>setCollapse(!collapsed)} title={titleValue}/>
                {!collapsed &&  <AccordionBody/>}
            </div>

    );
}

export default ControlledAccordion;