import React, {useMemo, useState} from 'react';
import {log} from "util";

export const HelpForReactMemoExample = () => {
    console.log("rendering HelpForReactMemoExample")
    const [users,setUsers] = useState<Array<string>>(['lex','ble','Alexq','Aledx','Aleax','Aglex'])
    const [counter,setCounter] = useState(0)

    let newArr = useMemo(()=>{
        return users.filter(el=>el.length>3)
    },[users])

    return (
        <div>
            <span>{counter}</span>
            <button onClick={()=>setCounter(counter+1)}></button>
            <button onClick={()=>setUsers([...users,"asssaaa"])}></button>

            <ReactMemoUsers users={newArr}/>
        </div>
    );
};


// ReactMemoExample = HelpForReactMemoExample

const Users = (props:{users:Array<string>})=>{
    console.log("rendering users")
    const usersList = props.users.map((el,index)=><div key={index}>{el}</div>)
    return(
            <div>{usersList}</div>
        )


}

const ReactMemoUsers = React.memo(Users)