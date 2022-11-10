// import F_Counter from "./Component/F_counter";
// import Counter from "./Component/Counter";
// import Counters from "./Component/Counters";
// import Hide_and_show from "./Component/Hide_and_show";
// import ListOfUsers from "./Component/ListOfUsers";
// import RegisterForm from "./Component/RegisterForm";
// import Login from "./Component/Login";
// import LifeCycleMethods from "./Component/LifeCycle";
// import HooksDemo from "./functionalComponents/HooksDemo";
// import StateLiftingUp from "./Component/StateLiftingUp";
// import pure from "./PureComponent/MyPure"
// import MyPure from "./PureComponent/MyPure";
// import Fetch_use from "./Component/Fetch_use";
// import MemoComponent from "./functionalComponents/MemoComponent";
// import DummyComponent1 from "./Component/DummyComponent1";
// import ApiFetchData from "./functionalComponents/ApiFetchData";
// import FormData from "./functionalComponents/FormData";
import { useState } from "react";
import RoutingDemo from "./functionalComponents/RoutingDemo";


function App() {
  const [name, setname] = useState("");
  const [age, setAge] = useState(0);
  
  const getname = (name,age)=>{
    setname (name);
    setAge(age)
  }

  return (
    <div className="App">
      {/* <div className="row">
        <div className="col">
          <h1 className="text-center"><center>Class Component</center></h1>
          <Counter name={"shailesh"} gmail={"shaileshgokhale@gmail.com"} />
        </div>
        <div className="col">
          <h1 className="text-center"><center>Function Component</center></h1>
          <F_Counter name={"Anil"} gmail={"anil@gmail.com"} age={23} />

        </div>
      </div> */}

      {/* <Counters/> */}
      {/* <Hide_and_show className="mt-5" name = {"my name is shail"}/> */}
      {/* <ListOfUsers/> */}
      {/* <RegisterForm/> */}
      {/* <Login/> */}
      {/* <LifeCycleMethods/> */}
      {/* <HooksDemo/> */}
      {/* <StateLiftingUp name={"shailesh"} getname={getname}/> */}
      {/* <MyPure/> */}
      {/* name get by parent is {name} and age is {age} */}
      {/* <DummyComponent1 name="Hemchandra"  /> */}
      {/* <MemoComponent/> */}
      {/* <Fetch_use/> */}
      {/* <ApiFetchData/> */}
      {/* <FormData/> */}
      <RoutingDemo/>
    </div>
  );
    }

export default App;
