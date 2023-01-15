// import "./App.css";
// import ComponenteA from "./components/componenteA";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ComponenteA></ComponenteA>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import ComponenteA from "./components/componenteA";

function App() {
  const contactoPrueba = {
    nombre: "Jorge",
    apellido: "martinez",
    email: "sandokan992000@gmail.com",
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;
