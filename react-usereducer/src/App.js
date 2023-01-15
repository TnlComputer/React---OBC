import "./App.css";
// import Counter from "./components/Counter";
// import Loginusestate from "./components/LoginUseState";
import Loginusereducer from "./components/LoginUseReducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Counter - useReducer Examples</h1> */}
        {/* <Counter></Counter> */}
        {/* <h1>Login - useState Examples</h1> */}
        {/* <Loginusestate></Loginusestate> */}
        <h1>Login - useReducer Examples</h1>
        <Loginusereducer></Loginusereducer>
      </header>
    </div>
  );
}

export default App;
