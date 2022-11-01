import React, { Component } from 'react';
class DummyComponent extends Component {
    state = {  } 
    componentWillUnmount(){
        alert("unmounted")
    }
    render() { 
        return (
            <>
            DummyComponent called
            </>
        );
    }
}
 
export default DummyComponent;