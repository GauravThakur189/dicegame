import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = () => {

    const [diceRoll, setdiceRoll] = useState();
    

    const handleClick = () => {
        // Generate a random number between 1 and 6 (inclusive)
        const  rollValue = Math.floor(
            Math.random() * (Math.ceil(6) - Math.floor(1) + 1) + Math.floor(1),
        )
        setdiceRoll(rollValue);
    }
  return (
    <Thala>
    <div className='dice'
    onClick={handleClick}>
        <img src={`/dice${diceRoll}.png`} alt='dice1' />
    </div>
    <p> Click on Dice to Roll</p>
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