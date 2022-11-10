// import React, { Component } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function MemoComponent() {
    const [count, setcount] = useState(0);
    const [xyz, setxyz] = useState("");

    const countprevent = useMemo(function counter() {
            return count + 5;
        },[]);

        function xyz(){
            
        }




    return (
        <>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={() => setcount(count + 1)}> count</button>
            <button className='btn btn-primary' onClick={() => setxyz("abc")}> count</button>
            {countprevent};
        </>
    );
}

export default MemoComponent;
