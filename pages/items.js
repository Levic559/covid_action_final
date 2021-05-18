import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import NavButton from '../comps/NavButton'
import AboutUs from '../comps/aboutUs'
import FlyBird from '../comps/FlyBird'

const subtext={
  aboutus:{
    title:"Our Goal",
    text:"BIRD is an app designed to educated its users about the COVID-19 Virus. For those who want to take action or test their knowlage, there are also Donation links and quizes."
  },
  team:{
    title:"Developers & Deaigners",
    text: "Levi Chen, Adrian Tejada",
  }
  }
  export default function items(){
  // const router = useRouter();
  // // console.log(router.query);
  // const {content}= router.query;
  
  // var tittle= "  ";
  // var text =" "    ;
  // if (content === "aboutus"){
  // tittle=subtext.aboutus.tittle,
  // text=subtext.aboutus.text}
  // if (content === "team"){
  //   tittle=subtext.team.tittle,
  //   text=subtext.team.text}
  
  const [title, setTittle] =useState("" )
  const [text, setText] =useState("")
  
  
  const onaboutusClick =()=>{
    setTittle(subtext.aboutus.title)
    setText(subtext.aboutus.text)
  }
  
  const onteamClick =()=>{
    setTittle(subtext.team.title)
    setText(subtext.team.text)
  }
  


  return <div>
    <AboutUs                           
    subtitle={title} text={text}
    onaboutusClick={onaboutusClick}
    onteamClick={ onteamClick}
    />

  <FlyBird/>

    
</div>

}