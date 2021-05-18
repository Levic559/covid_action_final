//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Image from 'next/image' 


const show = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 1; 
}
50% {
  opacity: 1; 
}
75% {
  opacity: 1; 
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
  opacity: 1; 
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

const ImgesCont =styled(animated.div)`
position:absolute;


`;
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 4s ${show}   step-start infinite;
z-index:3;
position:absolute;
`
const ImgCont3 =styled.img`
width:${(props)=>props.width3}px;
height:auto;
animation: 4s ${show2}  step-start infinite;
z-index:3;
position:absolute;
`

const ImgCont4 =styled.img`
width:${(props)=>props.width4}px;
height:auto;
animation: 4s ${show3}  step-start infinite;
z-index:3;
position:absolute;
`
const Text1 =styled.p`
font-family:Roboto;
font-size:20px;
font-weight:700;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
animation: 4s ${show}   step-start infinite;
`
const Text2 =styled.p`
font-family:Roboto;
font-size:20px;
font-weight:700;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
width:150px;
animation: 4s ${show2}   step-start infinite;
`
const Text3 =styled.p`
font-family:Roboto;
font-size:20px;
font-weight:700;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
width:110px;
position:absolute;
animation: 4s ${show3}   step-start infinite;

`

//props
const ImageCompG5= ({
 width=250,
 width2=250,
 width3=250,
 width4=250,
 text1="Day1",
 text2="Day7",
 text3="Day14"
 
}) => {
 
  return (
    
  <ImgesCont    >
      <Text1> {text1}</Text1>
      <Text2> {text2}</Text2>
      <Text3> {text3}</Text3>
      <ImgCont2 src="/virus-1-03.png"   width2 ={width2 } />
      <ImgCont3 src="/virus-2-03.png"   width3 ={width3 } />
      <ImgCont4 src="/virus-3-03.png"   width4 ={width4 } />
    </ImgesCont>  
    
  )
}


export default ImageCompG5;
