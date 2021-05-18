//Eagle logo for Levi
import React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';

const BirdLogoCont=styled.div`
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
const BirdLogo = ({
  text="BIRD",
  fontSize=80,
  width=180,
  display="block",
  Fontdisplay="block",
  marginTop=15,
  right=0
}) => {
const router = useRouter();
// ()=>router.push( routeTo)
  return <BirdLogoCont>
      
    <LogoImg  src ="/bird-logo.svg" width={width}  display={ display}  />
   
    <LogoImput  fontSize={fontSize} Fontdisplay={Fontdisplay} marginTop={marginTop} right={right}>
      {text}
    </LogoImput>


    </BirdLogoCont>
}

export default BirdLogo;