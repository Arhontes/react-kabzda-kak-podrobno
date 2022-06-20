import React, {useMemo, useState} from 'react';

const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake<1000000){
                fake++;
                const fakeVale = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    },[a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <div>
            <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                result for A:{resultA}
            </div>
            <div>
                result for B:{resultB}
            </div>
        </div>
    );
};

export default DifficultCountingExample;