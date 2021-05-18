import React from "react";
import styled ,{ keyframes } from 'styled-components';
import {useRouter} from 'next/router';


const size = keyframes`
0%{
   transform: scale(.75); 
}
25%{
   transform: scale(1.25);  
50% {
   transform: scale(.5);  
75% {
  transform: scale(.75);  
}
100% {
  transform: scale(1);  
}
`


const AppLogoCont=styled.div`
margin: 5px;
display:flex;
flex-direction:column;
align-itmes:center;
`;
const LogoImg = styled.img`
width:${(props)=>props.width}px;
height:auto;
opject-fit:contain;
margin:0;
display:${(props)=>props.display};
animation: 1s ${size}   ease infinite  ;


`;
const LogoImput = styled.p`
color:#CC6666;
font-size:${(props)=>props.fontSize}px;
font-family: 'Archivo', sans-serif;
font-weight:700;
align-items:center;
margin:${(props)=>props.marginTop}px  0 0 0;
display:${(props)=>props.Fontdisplay};
position: relative;
right: ${(props)=>props.right}px;
`;

 

//props
const AppLogo = ({
  text="Covid Action",
  fontSize=45,
  width=180,
  display="block",
  Fontdisplay="block",
  marginTop=15,
  right=0
}) => {
const router = useRouter();
// ()=>router.push( routeTo)
  return <AppLogoCont onClick={()=>router.push("/")}>
      
    <LogoImg  src ="/AppLogo.svg" width={width}  display={ display}  />
   
    <LogoImput  fontSize={fontSize} Fontdisplay={Fontdisplay} marginTop={marginTop} right={right}>
      {text}
    </LogoImput>


    </AppLogoCont>
}

export default AppLogo;