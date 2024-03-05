import FrontPage from "./components/FrontPage"
import SecondPage from "./components/SecondPage";
import {useState} from "react";

const App = ()=>{

  const [isgameStarted, setIsgameStarted] = useState(false);
  const togglegame = ()=>{
    setIsgameStarted((prev)=> !prev);
  }
  return(<>
  
    {isgameStarted ? <SecondPage /> : <FrontPage  toggle={togglegame}/>}
    
    </>
  )
}

export default App;