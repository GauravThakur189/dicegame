import React from 'react'
import styled from 'styled-components'

const NumberSelector = ({error,setError,selected,setSelected}) => {
    const arr = [1,2,3,4,5,6];
    
   const NumberSelectorHandler = (value)=>{
    setSelected(value);
    setError("");
   }


  return (
    <NumberSelectorContainer>
    <div className='error'>{error}</div>

    <div className='flex'>
    {arr.map((value,index)=>(
        <Box
        isSelected = {value===selected}
         key={index} onClick={()=>NumberSelectorHandler(value)}> {value}</Box>
    ))} 
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
.flex{
  display: flex;
  gap:24px;  
}

p{
  font-size:24px;
  font-weight:900px;
}
.error{
  color:red;
}
`

const Box = styled.div`
height:72px;
width:72px;
border:1px solid black;
display: grid;
place-items:center;
font-size:24px;
font-weight:100px;
background-color:${(props)=> props.isSelected ? "blue" : "white"};
color:${(props)=>props.isSelected? "white":"blue" };
`