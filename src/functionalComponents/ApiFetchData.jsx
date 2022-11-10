import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {AiTwotoneDelete}from "react-icons/ai"
// import {GrDocumentUpdate}from "react-icons/"

function ApiFetchData() {
  const APIENDPOINT = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState();
  useEffect(() => {
    axios.get(APIENDPOINT).then((response) => {
      if (response.status >= 200) {
        setData(response.data)
      }
      console.log(response);
    });

  },[])




  const createdata = (e) => {
    //e.preventDefault();
    alert("hello")
    let newdata = {};
    newdata.userId = userId;
    newdata.body = body;
    newdata.title = title;

    axios.post(APIENDPOINT, newdata).then((response) => {
      let posts = [response.data, ...data]
      setData(posts);
      console.log(response.data);
      console.log(posts);
    })
  }

  const handleDelete=(id)=>{  
        axios.delete(APIENDPOINT +"/"+id).then((response) => {
          console.log(response)
          const del = data.filter((d) => id !== d.id)
          setData(del)
        })
      }
      const handleUpdate=(newdata)=>{
        newdata.title = "updated"
        newdata.body = "my name is shailesh"
        console.log(newdata);
        axios.put(APIENDPOINT+"/"+newdata.id,newdata).then((response)=>{
          const posts = [...data]
          const index = posts.indexOf(newdata)
          posts[index] = response.data;
          setData(posts);
          console.log(index);   
        })
    }


  return (
    <center>
      {/* <button onClick={createdata}>add data</button> */}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">UserId</th>
              <th scope="col">Body</th>
              <th scope="col">Operartion </th>
            </tr>
          </thead>
          <tbody >
            {
              data.map((d) => (
                <tr key={d.id}>
                  <td scope="row">{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.userId}</td>
                  <td>{d.body}</td>
                  <td><button role={"delete" } className="text-danger cursor-pointer"  onClick={()=>handleDelete(d.id)}><AiTwotoneDelete/></button></td>
                  <td><button type="update" className="btn btn-primary p-1 m-1"  onClick={()=>handleUpdate(d)}>Update</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>

      <form onSubmit={createdata}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
          <input type="text" placeholder="Title" id="exampleInputPassword1" onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className="mb-3 form-check">
          <label htmlFor="exampleCheck1">UserId</label>
          <input type="text" placeholder="UserID" id="exampleCheck1" onChange={(e)=>setUserId(e.target.value)}/>

        </div>

        <div className="mb-3 form-check">
          <label htmlFor="exampleCheck1">Body</label>
          <input type="text" placeholder="Body" id="exampleCheck1" onChange={(e)=>setBody(e.target.value)}/>

        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </center>
  );
}

export default ApiFetchData;