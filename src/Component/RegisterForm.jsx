import React from 'react';
import { useState } from 'react';
import { user } from './userArray';
const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [remember, setRemember] = useState(false);

    const registration=(event) =>{
        event.preventDefault();
        const userdata = {}
        userdata.name = name
        userdata.email = email
        userdata.password = password
        userdata.address = address
        userdata.remember = remember
        console.log(userdata)
    }

    // const handleName =(event)=>{
    //     console.log(event.target.value);
    //     setName(event.target.value)
    //     console.log(name)
    // }
    // const handleEmail =(e)=>{
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // }

    // const handlePassword =(e)=>{
    //     console.log(e.target.value)
    //     setPassword(e.target.value)
    // }

    // const handleAddress =(e)=>{
    //     console.log(e.target.value)
    //     setAddress(e.target.value)

    // }
    return (
        <div className='container mt-5' onSubmit={registration}> 
            <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control"  placeholder="Enter name" onChange={(event)=>setName(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" className="form-control"  placeholder="Enter email" onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">address</label>
                        <input type="text" className="form-control"  placeholder="Enter address" onChange={(event)=>setAddress(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onClick={(event)=>setPassword(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-check-input mr-4" type="checkbox" value="" id="flexCheckDefault" onClick={(event)=>setRemember(event.target.checked)}/>
                        <label htmlFor="exampleInputPassword1" className='ml-4'>Remember me </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
}

export default RegisterForm;
