// import React from 'react'
import styled from "styled-components"

const TotalScore = () => {
  return (
    <ScoreContainer>
    <h1>0</h1>
    <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
   max-width:200px;
   background-color:#f5d76e;
   text-align:center;
  h1{
    font-size:100px;
    line-height:100px;
  }
  p{
    font-size:24px;
    font-weight:500px;
  }
`