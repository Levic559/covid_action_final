//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Image from 'next/image' 

const wing1 = keyframes`
0%{
  margin-top:215px; transform: scaleY(.75); 
}
50%{
  margin-top:200px; transform: scaleY(1);  
100% {
  margin-top:215px; transform: scaleY(.75); 
}

`;
const wing2 = keyframes`
0%{
  margin-top:110px; transform: scaleY(.75);
}
50%{
  margin-top:95px; transform: scaleY(1); 
100% {
  margin-top:110px; transform: scaleY(.75); 
}

`;

const BirdCont =styled(animated.div)`


`;
const ImgCont1 =styled.img`
width:${(props)=>props.width}px;
height:auto;
position:absolute;
margin-top:265px;
margin-left:30px;
z-index:2;
`
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 1s ${wing1}   ease-out infinite  ;
position:absolute;
margin-top:200px;
margin-left:15px;
z-index:3;
`
const ImgCont3 =styled.img`
width:${(props)=>props.width}px;
height:auto;
animation: 1s ${wing2} ease-out  infinite ;
position:absolute;
margin-top:95px;
margin-left:100px;
height:200px;
z-index:0;
`

//props
const FlyBird= ({
 width=250,
 width2=200,
}) => {
 
  return (
    
  <BirdCont    >
      <ImgCont1 src="/body.svg"   width ={width } />
      <ImgCont2 src="/wind1.svg"   width2 ={width2 } />
       <ImgCont3 src="/wind2.svg"   width ={width } />
      
   
    </BirdCont>  
    
  )
}


export default FlyBird;
