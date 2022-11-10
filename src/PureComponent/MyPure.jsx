import React, { PureComponent } from 'react';
class MyPure  extends PureComponent {
    constructor() {
        super();
    
    this.state = { 
        count:1
     }
    }
    render() { 
        console.log("re render call")
        return ( 
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
            </div>
         );
    }
}
 

export default MyPure;
