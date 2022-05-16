import React from 'react';
import AccordionTitle from "../AccordionComponents/AccordionTitle";
import AccordionBody from "../AccordionComponents/AccordionBody";

export type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean
}

function Accordion({titleValue,collapsed=false}:AccordionPropsType) {
    return (

            <div>
                <AccordionTitle title={titleValue}/>
                {!collapsed &&  <AccordionBody/>}
            </div>

    );
}

export default Accordion;