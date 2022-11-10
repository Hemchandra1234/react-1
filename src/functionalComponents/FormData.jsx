import React from "react";
import { useState } from "react";
import axios from 'axios';
// import { useEffect } from "react";


// const FormData = () => {
//     const [data, setdata] = useState([]);
//     // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
//     //     // console.log(response);
//     //     if (response.status >= 200) {
//     //         setdata(response.data);

//     //     }
// };

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {    
//     });
// });



const APIENPOINT = "https://jsonplaceholder.typicode.com/posts"; 

createdata = () => {
    data = { title: "xyz", body: "abc" },
        axios.post('APIENPOINT', data).then((response) => {
            console.log(response)
        })
    
    
return (
    <button onClick={createdata()}>Add</button>

);
}




// <div>
/* <form>

                <div className="mb-3 p-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 p-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 p-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                
                    <button type="submit" class="btn btn-primary p-3" >Submit</button>
                
k
            </form>
        </div>


    );
} *///}

export default FormData;