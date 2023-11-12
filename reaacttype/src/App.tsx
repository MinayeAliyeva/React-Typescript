import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  let user="Minaya"
  return (
   
    <div className="App">
      <Home name={user} />
    </div>
  );
}

export default App;
