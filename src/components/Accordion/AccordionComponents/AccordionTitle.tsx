import React from 'react';
type AccordionTitlePropsType={
    title:string
    setCollapse: ()=>void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return (
       <h3 onClick={()=>props.setCollapse()}>-- {props.title} --</h3>
    );
}

export default AccordionTitle;