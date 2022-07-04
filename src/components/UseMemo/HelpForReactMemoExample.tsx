import React, {useMemo, useState} from 'react';

export const HelpForReactMemoExample = () => {
    console.log("rendering HelpForReactMemoExample")
    const [users,setUsers] = useState<Array<string>>(['lex','ble','Alexq','Aledx','Aleax','Aglex'])
    const [counter,setCounter] = useState(0)

    let newArr = useMemo(()=>{
        console.log("попал в юзмемо")
        return users.filter(el=>el.length>3)
    },[users])

    return (
        <div>
            <span>{counter}</span>
            <button onClick={()=>setCounter(counter+1)}>setCounter</button>
            <button onClick={()=>setUsers([...users,`${users.length}`+"AAA"])}>setUsers</button>

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