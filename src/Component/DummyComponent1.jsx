import React,{Component} from 'react';

class DummyComponent1 extends Component{
    state={
        count:21
    }
    render(){
            console.log("render call  ")
        return(<>
        
            <h2>{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            </>
        );
    }
}
export default DummyComponent1;
