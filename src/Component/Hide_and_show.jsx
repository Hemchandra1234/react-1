import React,{ Component } from "react";
class Hide_and_show extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"shailesh",
            sagar:"sagar",
            show:true
        }
    }

    show=()=>{
        // alert("yes")
        this.setState({show:true})
    }
    
    hide=()=>{
        this.setState({show:false})
    }
    changename=()=>{
        this.setState({name:this.state.sagar})
    }
    render() { 
        return (
            <div>
                <center>
                   { this.state.show ? <h1>{this.state.name}</h1> :"" }
                    {this.state.show==false ? <button className="btn btn-primary m-2" onClick={this.show}>Show</button> :
                    <button className="btn btn-primary m-2" onClick={this.hide}>Hide</button>}
                     <button className="btn btn-primary m-2" onClick={this.changename}>changename</button>
                </center>
            </div>
        );
    }
}
 
export default Hide_and_show;