import F_Counter from "./Component/F_counter";
import Counter from "./Component/Counter";
import Counters from "./Component/Counters";
import Hide_and_show from "./Component/Hide_and_show";
import ListOfUsers from "./Component/ListOfUsers";
import RegisterForm from "./Component/RegisterForm";
import Login from "./Component/Login";
import LifeCycleMethods from "./Component/LifeCycle";
import HooksDemo from "./functionalComponents/HooksDemo";

function App() {
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
      <HooksDemo/>

    </div>
  );
}

export default App;
