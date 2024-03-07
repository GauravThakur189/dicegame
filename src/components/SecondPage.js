import React,{useState} from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const SecondPage = ()=>{
    const [selected, setSelected] = useState();
    const [diceRoll, setdiceRoll] = useState(1);
    const [score, setScore] = useState(0);
    const [error,setError] = useState("");

    const handleClick = () => {
        if(!selected){
            setError("Please select a number first")
            return;
           }
       
        // Generate a random number between 1 and 6 (inclusive)
        const  rollValue = Math.floor(
            Math.random() * (Math.ceil(6) - Math.floor(1) + 1) + Math.floor(1),
        )
        setdiceRoll(rollValue);
       

        if(selected === diceRoll){
            setScore((prevScore) => prevScore+selected);
         }else{
          setScore((prevScore) => prevScore -2);
         }

         setSelected(undefined);
    }

  

    return(   
        <MainContainer>
       <div className="top_section">
        <TotalScore score = {score} />

        <NumberSelector error={error} setError={setError} selected={selected} setSelected = {setSelected}/>
        </div>
        <RollDice diceRoll={diceRoll} handleClick={handleClick} />
       </MainContainer> 
       
    )
}

export default SecondPage;

const MainContainer = styled.div`
.top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`