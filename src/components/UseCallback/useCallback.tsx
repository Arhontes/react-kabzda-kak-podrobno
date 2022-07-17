import React, {useCallback, useState} from "react";

export const LikeUseCallback = () => {
    const [users,setUsers] = useState<Array<string>>(['lex','ble','Alexq','Aledx','Aleax','Aglex'])
    const [counter,setCounter] = useState(0)



    let setUsersHandler = useCallback(()=>{setUsers([...users,`${users.length} AAA`])
    },[users])
    return (
        <div>
            <span>{counter}</span>
            <button onClick={()=>setCounter(counter+1)}>setCounter</button>
            <ReactMemoUsers_UseCallbackExample setUsers={setUsersHandler}/>
        </div>
    );
};
type Users_UseCallbackExample={
    setUsers:()=>void
}
const Users_UseCallbackExample = (props:Users_UseCallbackExample)=>{
    console.log("rendering Users_UseCallbackExample")
    return(
        <div>
            <button onClick={props.setUsers}>some function</button>
        </div>
    )


}

const ReactMemoUsers_UseCallbackExample = React.memo(Users_UseCallbackExample)