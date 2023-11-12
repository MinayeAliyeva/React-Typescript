import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";

function App() {
  let user = "Minaya";
  let courseNumber = 67;
  const instructor={
    firsName:"Emin",
    lastName:'Eliyev'
  }
  return (
    <div className="App">
      <Home isBest={true} name={user} number={courseNumber} />
      <Instructor obj={instructor}/>
    </div>
  );
}

export default App;
