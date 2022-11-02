import React, { useEffect } from 'react';
import { useState } from 'react';

const HooksDemo = () => {
    const [count, setCount] = useState(0);
    const [name, setname] = useState("shailesh");

    const IncCount=() =>{       
        setCount(count+1)
    }
    useEffect(()=>{
        alert(count)
    },[count])

    const chnageName = ()=>{
        setname("sagar")
    }

    useEffect(()=>{
        alert(name)
    },[name])


    return (
        <center>
            <div>{count}</div>    
            <button onClick={IncCount}>+</button>
            <div>{name}</div>
            <button onClick={chnageName}>changeName</button>
        </center>
    );
}

export default HooksDemo;
