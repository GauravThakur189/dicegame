
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const SecondPage = ()=>{
    
    return(   
        <MainContainer>
       <div className="top_section">
        <TotalScore/>
        <NumberSelector/>
        </div>
        <RollDice />
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