import React, {useReducer, useState} from 'react';
import AccordionTitle from "../AccordionComponents/AccordionTitle";
import AccordionBody from "../AccordionComponents/AccordionBody";

export type AccordionPropsType = {
    titleValue: string,

}
type AccordionActionType = ReturnType<typeof accordionCollapsedAC>

function accordionCollapsedAC(){
    console.log("in accordionCollapsedAC")
    return {
        type:"SET-COLLAPSED"
    } as const
}

function reducerCollapsed(state:boolean, action:AccordionActionType){
    console.log("in reducerCollapsed")
    console.log(state)
    if(action.type === "SET-COLLAPSED"){
        return !state
    }
    return state;
}

function Accordion({titleValue}:AccordionPropsType) {

    const [collapsed, dispatchCollapsed] = useReducer(reducerCollapsed,false)
    const items=['first',"second","third", "forth"]
    return (

            <div>
                <AccordionTitle setCollapse={()=>dispatchCollapsed(accordionCollapsedAC())} title={titleValue}/>
                {!collapsed &&  <AccordionBody items={items} />}
            </div>

    );
}

export default Accordion;