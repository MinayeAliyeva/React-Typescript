
import "./App.css";
import ContextExample from "./components/ContextExample";
import EventActions from "./components/EventActions";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import Request from "./components/Request";
import { ThemeContextProvider } from "./components/ThemeContext";
import UseReducer from "./components/UseReducer";

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
      {/* <Home isBest={true} name={user} number={courseNumber} />
      <Instructor obj={instructor}/>
      <InstructorList array={instructorList}/>
      <Request status='error'/>
      <hr />
      <EventActions/> */}
      {/* <LoginCheck/> */}
      {/* <UseReducer/>
       */}
       <ThemeContextProvider>
       <ContextExample/>
       </ThemeContextProvider>
      
    </div>
  );
}

export default App;
