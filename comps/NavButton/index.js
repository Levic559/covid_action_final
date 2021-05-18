//Navigation UI for 2 Options 
import React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont=styled.div`
// margin-top:-20px;
display:flex;
flex-direction:row;
justify-content:center;

`;
const ButtonImput = styled.div`
border:none;
margin:0 5px;
`;
const ButtonImg =styled.img`
width:35px;
height:auto;
opacity:1;
`;
const ButtonIndex1 =styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:${props=>props.bgcolor1};;
margin:5px 5px 0 5px;
display:${props=>props.index1};
`;
const ButtonIndex2 =styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:${props=>props.bgcolor2};;
margin:5px 5px 0 5px;
display:${props=>props.index2};
`;
const ButtonIndex3 =styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:${props=>props.bgcolor3};;
margin:5px 5px 0 5px;
display:${props=>props.index3};
`;
const ButtonIndex4 =styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:${props=>props.bgcolor4};;
margin:5px 5px 0 5px;
display:${props=>props.index4};
`;
const ButtonIndex5 =styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:${props=>props.bgcolor5};;
margin:5px 5px 0 5px;
display:${props=>props.index5};
`;
const ButtonIndex6 =styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:${props=>props.bgcolor6};;
margin:5px 5px 0 5px;
display:${props=>props.index6};
`;


//props
const NavButton = ({
  display1="block",
  display2="block",
  display3="block",
  display4="block",
  display5="block",
  display6="block",
  bgcolor1="#9A9999",
  bgcolor2="#9A9999",
  bgcolor3="#9A9999",
  bgcolor4="#9A9999",
  bgcolor5="#9A9999",
  bgcolor6="#9A9999",
  width="180px",
  height="40px",
  radius="10px",
  opacity="1",
  nextFunction=()=>{},
  backFunction=()=>{},
  aboutusClick=()=>{},
  teamClick=()=>{},
  back="",
  next="",
  
}) => {
const router = useRouter();
// ()=>router.push(next)
  return <ButtonCont   >    
   <div onClick={aboutusClick}><ButtonImput onClick={()=>router.push(back)}>
    <ButtonImg  src ="/arrow-grey-left.svg"  />
    </ButtonImput></div> 
    <ButtonIndex1 index1={display1} bgcolor1={bgcolor1}></ButtonIndex1>
    <ButtonIndex2 index2={display2} bgcolor2={bgcolor2}></ButtonIndex2>
    <ButtonIndex3 index3={display3} bgcolor3={bgcolor3}></ButtonIndex3>
    <ButtonIndex4 index4={display4} bgcolor4={bgcolor4}></ButtonIndex4>
    <ButtonIndex5 index5={display5} bgcolor5={bgcolor5}></ButtonIndex5>
    <ButtonIndex6 index6={display6} bgcolor6={bgcolor6}></ButtonIndex6>
    <div onClick={teamClick}><ButtonImput onClick={()=>router.push(next)}>
    <ButtonImg  src ="/arrow-grey-right.svg"    />
    </ButtonImput> </div> 
    </ButtonCont>
}

export default NavButton;