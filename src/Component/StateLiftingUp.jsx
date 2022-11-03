import React, { Component } from 'react';
class StateLiftingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"pallavi",
            age:23
        }
    }
    
    render() { 
        this.props.getname(this.state.name,this.state.age);
        return ( 
            <center>
                {this.props.name}
            </center>
         );
    }
}
 
export default StateLiftingUp;