//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Image from 'next/image' 



const show1 = keyframes`
0%{
  opacity: 1; 
}
30% {
  opacity: 1; 
}
60% {
  opacity: 1; 
}
100% {
  opacity: 1; 
}



`;
const show2 = keyframes`
0%{
  opacity: 0; 
}
30% {
  opacity: 1; 
}
60% {
  opacity: 1; 
}
100% {
  opacity: 1; 
}



`;
const show3 = keyframes`
0%{
  opacity: 0; 
}
30% {
  opacity: 1; 
}
60% {
  opacity: 0; 
}
100% {
  opacity: 0; 
}



`;
const show4 = keyframes`
0%{
  opacity: 0; 
}
30% {
  opacity: 0; 
}
60% {
  opacity: 1; 
   
}
100% {
  opacity: 1; 
  
}


`;
const show5 = keyframes`
0%{
  opacity: 0; 
}
30% {
  opacity: 0; 
}
60% {
  opacity: 0; 
}
100% {
  opacity: 1; 
}



`;

const Cont = styled.div `
position:relative;
right: 30px;
`

const ImgesCont =styled(animated.div)`
position:absolute;
display:${props=>props.Imagedisplay}
`;
const ImgCont1 =styled.img`
width:${(props)=>props.width}px;
height:auto;
z-index:3;
animation: 6s ${show1}   step-start  infinite;
z-index:2;
position:absolute;
margin-left:-90px;
margin-top:-50px;

`
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 6s ${show2}  step-start infinite;
z-index:3;
position:absolute;
margin-left:-90px;
margin-top:-50px;
`
const ImgCont3 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 6s ${show3}  step-start infinite;
z-index:4;
position:absolute;
margin-left:-90px;
margin-top:-50px;
`
const ImgCont4 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 6s ${show4}  step-start infinite;
z-index:4;
position:absolute;
margin-left:-90px;
margin-top:-50px;
`
const ImgCont5 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 6s ${show5}  step-start infinite;
z-index:4;
position:absolute;
margin-left:-90px;
margin-top:-50px;
`
// const Text1 =styled.p`
// font-family:Roboto;
// font-size:20px;
// font-weight:700;
// color: grey;
// margin:0;
// position:absolute;
// background-color:#ffffff;
// animation: 4s ${show1}    infinite  ;
// `
// const Text2 =styled.p`
// font-family:Roboto;
// font-size:20px;
// font-weight:700;
// color: grey;
// margin:0;
// position:absolute;
// background-color:#ffffff;
// width:150px;
// animation: 4s ${show2}    infinite  ;
// `
// const Text3 =styled.p`
// font-family:Roboto;
// font-size:16px;
// font-weight:700;
// color: grey;
// margin:0;
// position:absolute;
// background-color:#ffffff;
// width:110px;
// position:absolute;
// margin-top:175px;
// animation: 4s ${show2}    infinite  ;

// `

//props
const ImageCompGP2= ({
 width=450,
 width2=450,
 width3=80,
 width4=45,
 text1="",
 text2="",
 text3=" ",
 Imagedisplay="block",
 
}) => {
 
  return (<Cont>
    
  <ImgesCont Imagedisplay={Imagedisplay}   >
      {/* <Text1> {text1}</Text1>
      <Text2> {text2}</Text2>
      <Text3> {text3}</Text3> */}
      <ImgCont1 src="/indoor-public.svg"   width ={width } />
      <ImgCont2 src="/people-nomask-1.svg"   width2 ={width2 } />
      <ImgCont3 src="/mask.svg"   width2 ={width2 } />
      <ImgCont4 src="/excomation.svg"   width2 ={width2 } />
      <ImgCont5 src="/fine.svg"   width2 ={width2 } />

    </ImgesCont>  
    </Cont>
  )
}


export default ImageCompGP2;
