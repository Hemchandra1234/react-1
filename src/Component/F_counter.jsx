import React, { useState } from "react";

const F_counter = (props) => {

    const { name, email, age } = props
    console.log(props)
    const [names, setName] = useState(name)
    const [emails, setEmail] = useState(email)
    const [ages, setAge] = useState(age)
    const [number, setNumber] = useState(0)

    // const [name,setName]=useState("shailesh")
    // const [number,setNumber]=useState(0)

    const changename = () => {
        setName("sagar");
    }

    function increment() {
        setNumber(number + 1)
    }
    function decrement() {
        setNumber(number - 1)
    }

    return (
        <center>
            <>
                <h1>{names}</h1>
                <h1>{ages}</h1>
                <h1>{emails}</h1>
                <h1>{number}</h1>
                <button className="btn btn-primary m-3 p-3" onClick={changename}>changename</button>
                <button className="btn btn-primary m-3 p-3" onClick={() => setAge(25)}>changeage</button>
                <button className="btn btn-primary m-3 p-3" onClick={() => setEmail("sagar@gmil.com")}>changeemail</button>
                <button className="btn btn-primary m-3 p-3" onClick={increment}>+</button>
                <button className="btn btn-primary m-3 p-3" onClick={decrement}>-</button>

            </>
        </center>
    )

}

export default F_counter;
