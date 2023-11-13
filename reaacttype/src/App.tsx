
import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import Request from "./components/Request";

function App() {
  let user = "Minaya";
  let courseNumber = 67;
  const instructor={
    firsName:"Emin",
    lastName:'Eliyev'
  }
  const instructorList=[
    {
      firsName:"Emin",
      lastName:'Eliyev'
    },
    {
      firsName:"Minaya",
      lastName:'eliyeva'
    },
    {
      firsName:"nargis",
      lastName:'Elinamazovev'
    },
  ]
  return (
    <div className="App">
      <Home isBest={true} name={user} number={courseNumber} />
      <Instructor obj={instructor}/>
      <InstructorList array={instructorList}/>
      <Request status='error'/>
    </div>
  );
}

export default App;
