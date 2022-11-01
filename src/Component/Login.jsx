import React from 'react';
import { useState } from 'react';
import LogInForm from './LogInForm';
const Login = () => {
    const [login, setLogin] = useState(false);
    

    return(
        <div>
            {
                login
                ?    <h1> welcome </h1>
                :    <LogInForm/>
            }
        </div>
    )
    
}

export default Login;
