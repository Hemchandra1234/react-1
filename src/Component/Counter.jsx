import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // name :"Hemchandra", 
            // age : 23,
            count: 0,
            name: this.props.name,
            email: this.props.email,
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })

    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })

    }

    changeName = () => {
        this.setState({
            name: "sagar"
        })
    }

    render() {
        const name = "shailesh"
        return (
            <>
                <center>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.age}</h1>
                    <h1>{this.state.count}</h1>
                    {/* <button onClick = {this.increment}>increment</button>
            <button onClick = {this.decrement}>decrement</button> */}
                    <button className='btn btn-primary m-3 p-3' onClick={this.increment}>increment</button>
                    <button className='btn btn-primary m-3 p-3' onClick={this.decrement}>de crement</button>
                    <button className='btn btn-primary m-3 p-3' onClick={() => this.setState({ name: "sagar" })}>changename</button>
                </center>
            </>
        )
    }
}

export default Counter;
