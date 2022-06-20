import React from 'react';

type ExamplePropsType = {
    users: Array<string>
}
export const Example = (props: ExamplePropsType) => {

    console.log("Example")
    return (
        <div>{props.users.map((el, index) => <div key={index}>{el}</div>)}</div>
    );
}


