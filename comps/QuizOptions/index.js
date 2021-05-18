import React from "react";
import styled from 'styled-components';


const QuizCont =styled.div`
display:flex;
flex-direction:column;
align-itmes:center;
`;
const Quiz = styled.div`
display:flex;
flex-direction:row;

`;
const RadioBox =styled.button`
width:20px;
height:20px;
border-radius:50%;
border:3.5px solid grey;
background-color: #FFF;

`;
const RadioBoxClick =styled.div`
width:10px;
height:10px;
border-radius:50%;
background-color: grey;
z-index:1;
position:absolute;
margin-left:5px;
margin-top:5px;
display:${(props) => props.Radiodisplay};
`;

//props
const QuizOptions= ({
  text=" how are you!",
   display="none",
  
 }) => {
 
   return <QuizCont>
       
       <Quiz>
        <RadioBox/>  <RadioBoxClick Radiodisplay={display} />
       </Quiz>
 
     </QuizCont >
 }
 
 
 export default QuizOptions;