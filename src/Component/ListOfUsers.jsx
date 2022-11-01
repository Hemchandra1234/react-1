import React, { Component } from "react";
import {RiDeleteBin6Fill} from "react-icons/ri"
import { user } from "./userArray"
class ListOfUsers extends Component {
    constructor(props) {
        super(props);
        this.state ={
            users :user
        }

        console.log(user)
    }
    handleDelete = (user)=>{
        alert("called")
        console.log(user)
    }

    render() {
        return (
            <div className="container">
                <table className="table mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">USERID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.users.map((user)=>(
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                            <td role="button" className="text-danger cursor-pointer" onClick={()=>this.handleDelete(user)}><RiDeleteBin6Fill/></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListOfUsers;