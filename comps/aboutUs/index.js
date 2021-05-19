import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import NavButton from '../NavButton/index.js'



const AboutusCont=styled.div`
width:${props=>props.width};
height:${props=>props.height};
border-radius:${props=>props.radius};
background-color:${props=>props.bgc};
border:none;
display:${(props) => props.contdisplay};
`;
const ContentBox=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;
const TitleImput = styled.div`
color:#545454;
font-size:24px;
font-family: 'Archivo', sans-serif;
font-weight:700;
align-items:center;
justify-content:center;
text-align:center;
margin:30px;
`;

const ContentImput = styled.div`
color:#545454;
font-size:20px;
font-family: 'Archivo', sans-serif;
font-weight:500;
align-items:center;
line-height:25px;
width:250px;
height:250px;
width:${props=>props.p2width};
display:flex;
flex-direction:column;

margin-top:20px;


`;

const ButtonCont=styled.div`


`;





    
//props
const AboutUs = ({
  title="Our Goal",
  text="Covid-action is an app designed to educated its users about the COVID-19 Virus. For those who want to take action or test their knowlage, there are also Donation links and quizes.",
  text2="",
  text3="",
  bgcolor="#e8e8e8",
  width="300px",
  height="425px",
  radius="10px",
  p2width="200px",
  contdisplay="block",
  bgcolor5="#FF7A00",
  bgcolor6="#9A9999",
  aboutusClick=()=>{},
  teamClick=()=>{}
}) => {
  
// const router = useRouter();
// ()=>router.push( routeTo)
  return <AboutusCont   width={width} height={height} bgc={bgcolor} radius={ radius} contdisplay={contdisplay}>
  < ContentBox      p2width={p2width}>
    
    <TitleImput   >
      {title}
    </TitleImput >
    <ContentImput  >
     <div> {text} </div>
     <br/>
     <div>{text2}</div> 
     <br/>
     <div>{text3}</div> 
    </ContentImput  >
    <ButtonCont>
    <NavButton   bgcolor5={bgcolor5} bgcolor6={bgcolor6} display1="none" display2="none" display3="none" display4="none" 
    aboutusClick={aboutusClick}
    teamClick={ teamClick}/>
    </ButtonCont>
    </ ContentBox>
    </AboutusCont>

}



export default AboutUs;