// Button for Levi 
//Height and width editable
import React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useState} from 'react';

const ButtonCont=styled.div`
justify-content:center;
align-items:center;


`;
const ButtonImput = styled.button`
background-color:${props=>props.bgc};
color:#545454;
width:${props=>props.width};
height:${props=>props.height};
border-radius:${props=>props.radius};
border:none;
font-size:22px;
font-family: 'Archivo', sans-serif;
font-weight:400;
opacity:${(props) => props.hover};

outline: none;
margin-bottom:20px;

`;

//props
const Button = ({
  text="Let's start",
  bgcolor="#C4C4C4",
  width="180px",
  height="40px",
  radius="10px",
  opacity="1",
  onClick=()=>{},
 routeTo =  "/",
}) => {
  const router = useRouter();
  return <ButtonCont   onClick={() => router.push(routeTo)} target="_blank" >    

    <ButtonImput bgc={bgcolor} width={width} height={height}radius={radius} hover={opacity}  onClick={onClick} >
      {text}
    </ButtonImput>


    </ButtonCont>
}

export default Button;