// constructor 
// render
// componentDidMount
// componentDidUpdate
// componentWillUnmount
import React,{Component} from "react"

class LifeCycleMethods extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            count : 0,
        }
        // alert(this.state.count);  
        console.log("constructor call")      
    }

    // after DOM LOAD componentDidMount call
    componentDidMount(){
        console.log("componentDidMount call")
    }
    
    
    // after DOM change componentDidUpdate call
    componentDidUpdate(prevState){
        console.log("componentDidUpdate called")
        console.log(prevState,"prevstate");
    }

    updateCount = ()=>{
        this.setState(prevstate => ({ count: prevstate.count + 1}));
    }
    render() { 
        console.log("Render call 1")      
        return ( 
            <center>
                <h1>{this.state.count}</h1>
                <button className="m-4 btn btn-primary" onClick={this.updateCount}>+</button>
            </center>
         );
    }
}
 
export default LifeCycleMethods;