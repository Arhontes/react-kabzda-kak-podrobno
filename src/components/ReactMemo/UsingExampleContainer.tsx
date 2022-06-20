import React, {useState} from 'react';
import {ExampleContainerReactMemo} from "./ExampleContainer-ReactMemo";

function UsingExampleContainer() {
    console.log("UsingExampleContainer")
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Alex','Alexxx','Alexq','Aledx','Aleax','Aglex',])
    const addUser = ( )=>{
        setUsers([...users,"alex"+ " "+ new Date().getDate()])
    }
    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>addUser()}>add user</button>
            <span>{counter}</span>
            <ExampleContainerReactMemo users={users}/>
        </div>
    );
}

export default UsingExampleContainer;