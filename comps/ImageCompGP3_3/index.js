//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Image from 'next/image' 

const show1 = keyframes`
0%{
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
50%{
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
display:${props=>props.Imagedisplay}
`;
const ImgCont1 =styled.img`
width:${(props)=>props.width}px;
height:auto;
animation: 3s ${show1}   step-start  infinite;
z-index:2;
position:absolute;
margin-left:-45px;
margin-top:-30px;

`
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 2s ${show2}  step-start infinite;
z-index:3;
position:absolute;
margin-left:-45px;
margin-top:-30px;
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
const ImageCompGP3_3= ({
 width=380,
 width2=380,
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
      <ImgCont1 src="/vancouverisland.svg"   width ={width } />
      <ImgCont2 src="/vancouverisland-2.svg"   width2 ={width2 } />
      

    </ImgesCont>  
    </Cont>
  )
}


export default ImageCompGP3_3;
