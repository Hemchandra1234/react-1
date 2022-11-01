import React, { Component } from 'react';
class New_counter extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }
    state = {  }
    render() { 
        return ( 
            <center>
                <div>
                    <span className=''>{this.props.value}</span>
                    <button className='btn btn-sm btn-warning m-2 badge mt-4' onClick={()=>this.props.handleIncrement(this.props.counter)}>Increment</button>
                    <button className='btn btn-sm btn-danger m-2 badge mt-4' onClick={()=>this.props.onDelete(this.props.id)}>Delete {this.props.id}</button>
                </div>
            </center>
         );
    }
}
 
export default New_counter;