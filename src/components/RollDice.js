import React, { useState } from 'react'
import styled from 'styled-components'
import Rules from './Rules';



const RollDice = ({diceRoll ,handleClick}) => {

    
    const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
    

    
    
  return (
  
    <Thala>
    <div className='dice'
    onClick={handleClick}>
        <img src={`/dice${diceRoll}.png`} alt='dice1' />
    </div>
    <p> Click on Dice to Roll</p>
    <button onClick={openPopup}> Rules To Play The Game</button>
    {isPopupOpen && <Rules onClose={closePopup}/>}
    
    </Thala>
  )
}

export default RollDice;

const Thala = styled.div`
 display:flex;
 flex-direction: column;
 align-items:center;
 justify-content:center;
 
 .dice{
    cursor:pointer;
 }
 img{
    width:200px;
    height:200px;
 }
 p{
    font-size:20px;
 }

`