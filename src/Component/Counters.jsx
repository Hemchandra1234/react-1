import React,{Component} from "react";
import New_counter from "./New_counter";

class Counters extends Component {
    constructor(){
        super();
        this.state={
            counters :[ 
                {id:1,value:1},
                {id:2,value:5},
                {id:3,value:1},
                {id:4,value:1},
                {id:5,value:1},
            ]
        }
    }
    onDelete=(counterId)=>{
        const counters = this.state.counters.filter((counter)=>
            counterId !== counter.id
        )
        this.setState({counters:counters})
    }

    handleIncrement = (counter)=>{
        const counters = [...this.state.counters]
        const index =counters.indexOf(counter)  //2
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters : counters});
    }

    render() { 
        return (
            <div>
                {this.state.counters.map((counter)=>(
                    <New_counter 
                    key={counter.id} 
                    value={counter.value}
                    id={counter.id}
                    onDelete={this.onDelete}
                    handleIncrement={this.handleIncrement}
                    counter={counter}
                    />
                ))}
            </div>
        );
    }
}
 
export default Counters;