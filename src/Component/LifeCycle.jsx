// constructor 
// render
// componentDidMount
// componentDidUpdate
// componentWillUnmount
import React,{Component} from "react"
import DummyComponent from "./DummyComponent";

class LifeCycleMethods extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            count : 0,
            show : false
        }
        // alert(this.state.count);  
        // console.log("constructor call")      
    }

    // after DOM LOAD componentDidMount call
    // componentDidMount(){
    //     console.log("componentDidMount call")
    // }
    
    // use for conditionally update the state 
    // shouldComponentUpdate(){
    //     // by default false 
    //     // return false;
    //     console.log(this.state.count)

    //     if(this.state.count>5){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    
    
    // after DOM change componentDidUpdate call
    // componentDidUpdate(prevState){
        // console.log("componentDidUpdate called")
        // console.log(prevState,"prevstate");
    // }

    componentWillUnmount(){
        alert("yes");
    }


    updateCount = ()=>{
        this.setState(prevstate => ({ count: prevstate.count + 1}));
    }
    render() { 
        // console.log("Render call 1")      
        return ( 
            <center>
                <h1>{this.state.count}</h1>
                {this.state.show ? <DummyComponent/> : ""}
                <button className="m-4 btn btn-primary" onClick={this.updateCount}>+</button>
                <button className="m-4 btn btn-primary" onClick={()=>this.setState({show:!this.state.show})}>hide and show</button>
            </center>
         );
    }
}
 
export default LifeCycleMethods;