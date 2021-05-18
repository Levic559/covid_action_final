//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Image from 'next/image' 

const size1 = keyframes`
0%{
  transform: scale(.75); 
}
50%{
  transform: scale(1.25); 
}
100% {
  transform: scale(.5); 
}

`;
const size2 = keyframes`
0%{
  transform: scale(1); 
}
50%{
  transform: scale(.35); 
}
100% {
  transform: scale(.75); 
}

`;
const show1 = keyframes`
0%{
  opacity: 0; 
}
33% {
  opacity: 1; 
}
66% {
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
33% {
  opacity: 0; 
}
66% {
  opacity: 1; 
}
100% {
  opacity: 0; 
}
`;

const Cont = styled.div `
position:relative;
right: 30px;
`

const ImgesCont =styled(animated.div)`
position:absolute;
display:${props=>props.ImageG1display}
`;
const ImgCont1 =styled.img`
width:${(props)=>props.width}px;
height:auto;
z-index:2;

`
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 2s ${size1}  1s step-start infinite;
z-index:3;
position:absolute;
margin-left:-245px;
margin-top:60px;
`
const ImgCont3 =styled.img`
width:${(props)=>props.width3}px;
height:auto;
animation: 2s ${size2}  1s step-start infinite;
z-index:3;
position:absolute;
margin-left:-280px;
margin-top:70px;
`

const ImgCont4 =styled.img`
width:${(props)=>props.width4}px;
height:auto;
animation: 2s ${size1}  1s step-start infinite;
z-index:3;
position:absolute;
margin-left:-265px;
margin-top:110px;
`
const Text1 =styled.p`
font-family:Roboto;
font-size:20px;
font-weight:700;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
animation: 4s ${show1}    infinite  ;
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
animation: 4s ${show2}    infinite  ;
`
const Text3 =styled.p`
font-family:Roboto;
font-size:16px;
font-weight:700;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
width:110px;
position:absolute;
margin-top:175px;
animation: 4s ${show2}    infinite  ;

`

//props
const ImageCompG1= ({
 width=300,
 width2=35,
 width3=80,
 width4=45,
 text1="New discovery",
 text2="Dec,29,2019",
 text3=" SARS-CoV-2",
 ImageG1display="block",
 
}) => {
 
  return (<Cont>
    
  <ImgesCont ImageG1display={ImageG1display}   >
      <Text1> {text1}</Text1>
      <Text2> {text2}</Text2>
      <Text3> {text3}</Text3>
      <ImgCont1 src="/China-03.png"   width ={width } />
      <ImgCont2 src="/virus-03.png"   width2 ={width2 } />
      <ImgCont3 src="/virus-03.png"   width3 ={width3 } />
      <ImgCont4 src="/virus-03.png"   width4 ={width4 } />
    </ImgesCont>  
    </Cont>
  )
}


export default ImageCompG1;
