import React from 'react';
import { useState } from 'react';

const LogInForm = () => {
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [usernameErr, setuserNameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);


    const handleUsername =(event)=>{
        console.log(event.target.value.length);
        if(event.target.value.length < 4 ){
            setuserNameErr(true);
        }else{
            setuserNameErr(false);
        }
        setuserName(event.target.value);
    } 

    const handlePassword = (event)=>{
        if(event.target.value.length < 8 && event.target.value.includes("@")){
            setPasswordErr(true);
        }
        else{
            setPasswordErr(false)
        }
        setPassword(event.target.value);
    }
    return (
        <div className='container mt-5'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUsername}/>
                    {usernameErr ? <span className='text-danger'> length cannot be lessthan 4</span> : ""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword}/>
                    { passwordErr ? <span className='text-danger'> password length cannot be lessthan 4</span> : ""}

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default LogInForm;
