//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Button from '../Button'

const show = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 1; 
}
50% {
  opacity: 0; 
}
75% {
  opacity: 0; 
}
100% {
  opacity: 0; 
}


`;
const show2 = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 0; 
}
50% {
  opacity: 1; 
}
75% {
  opacity: 0; 
}
100% {
  opacity: 0; 
}

`;
const show3 = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 0; 
}
50% {
  opacity: 0; 
}
75% {
  opacity: 1; 
}
100% {
  opacity: 0; 
}
`;
const show4 = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 0; 
}
50% {
  opacity: 0; 
}
75% {
  opacity: 0; 
}
100% {
  opacity: 1; 
}
`;

const ImgesCont =styled(animated.div)`
display:flex;
flex-direction:column;
align-items:center;
margin-top:-20px;

`;
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto; 
margin-top:50px;
position:relative;
opacity:${(props)=>props.opacity2};
animation: 8s ${show}   step-start infinite;
`
const ImgCont3 =styled.img`
width:${(props)=>props.width3}px;
height:auto;
position:relative;
bottom: 160px;
opacity:${(props)=>props.opacity3};
animation: 8s ${show2}   step-start infinite;
`
const ImgCont4 =styled.img`
width:${(props)=>props.width4}px;
height:auto;
position:relative;
bottom: 310px;
opacity:${(props)=>props.opacity4};
animation: 8s ${show3}   step-start infinite;
`
const ImgCont5 =styled.img`
width:${(props)=>props.width5}px;
height:auto;
position:relative;
bottom:425px;
opacity:${(props)=>props.opacity5};
animation: 8s ${show4}   step-start infinite;
`


//props
const ImageCompV1= ({
 width2=150,
 width3=200,
 width4=250,
 width5=250,
 

 
}) => {
 
  return (
   
  <ImgesCont    >
    <ImgCont2 src="/pfizer.svg"   width2 ={width2 } />
    <ImgCont3 src="/moderna.svg"   width3 ={width3 }  />
    <ImgCont4 src="/astrazeneca.svg"   width4 ={width4 }  />
    <ImgCont5 src="/Janssen_Logo.jpg"   width5 ={width5 } />
    </ImgesCont>  
    
  )
}


export default ImageCompV1;
