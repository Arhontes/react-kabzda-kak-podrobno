import React, {useState} from 'react';
import AccordionTitle from "../AccordionComponents/AccordionTitle";
import AccordionBody from "../AccordionComponents/AccordionBody";

export type AccordionPropsType = {
    titleValue: string,

}

function Accordion({titleValue}:AccordionPropsType) {

    let [collapsed, setCollapse] = useState<boolean>(true)

    return (

            <div>
                <AccordionTitle setCollapse={()=>setCollapse(!collapsed)} title={titleValue}/>
                {!collapsed &&  <AccordionBody/>}
            </div>

    );
}

export default Accordion;