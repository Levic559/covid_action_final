//Full bird Icon for Levi
import React from "react";
import styled from 'styled-components';


const AvatarCont =styled.div`
width:${(props)=>props.width}px;
height:auto;
`;
const AvatarImg = styled.img`
src:${props=>props.src} 
`;

//props
const Avatar= ({
 width=300,
  src="/doctor-hand.svg"
}) => {

  return <AvatarCont  width ={width }  >
      
    <AvatarImg  src ={src}   />

    </AvatarCont>
}


export default Avatar;