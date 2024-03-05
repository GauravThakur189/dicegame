import React,{useState} from 'react'
import styled from 'styled-components'

const NumberSelector = () => {
    const arr = [1,2,3,4,5,6];
    const [selected, setSelected] = useState();
    console.log(selected);
  return (
    <NumberSelectorContainer>
    <div className='flex'>
    {arr.map((value,index)=>(
        <Box
        isSelected = {value===selected}
         key={index} onClick={()=>setSelected(value)}> {value}</Box>
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