import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLogo from '../comps/AppLogo'
import Button from '../comps/Button'
import AboutUs from '../comps/aboutUs'
import React, { useState } from "react"
import {useSpring, animated} from 'react-spring'
import {config} from 'react-spring'
import FlyBird from '../comps/FlyBird'


const subtext={
  aboutus:{
    title:"Our Goal",
    content:"Covid-action is an app designed to educate its users about the COVID-19 Virus. For those who want to take action or test their knowledge, there are also Donation links and quizzes.",
  },
  team:{
    title:"Our Team",
   content: "  Levi Chen  ",
   content2: "Adrian Tejada",
   content3: "Sher Ali  ",
  
  }
  }

export default function Home() {

  const mainLogo = useSpring( { config: { duration: 1000 }, 
    to : [
      { opacity: 1,rotateZ: 0 },
      { opacity: 1,rotateZ: 30},
      { opacity: 1,rotateZ: 60},
      { opacity: 1,rotateZ: 90}, 
      { opacity: 1,rotateZ: 120},
      { opacity: 1,rotateZ: 150},
      { opacity: 1,rotateZ: 180},
      { opacity: 1,rotateZ: 210},
      { opacity: 1,rotateZ: 240},
      { opacity: 1,rotateZ: 270},
      { opacity: 1,rotateZ: 300},
      { opacity: 1,rotateZ: 330},
      { opacity: 1,rotateZ: 360}, 
    ] ,
    from: {opacity: 0 }, delay: 1200,})
  const logotext = useSpring({ config:config.wobbly, 
   transform: 'translate3d(0,400px,0)',from: { transform: 'translate3d(0,0px,0)'}
  })
  const text = useSpring( { config: { duration: 300 },opacity: 1, from: {opacity: 0}, delay: 1500,})
  const [display,setdisplay] = useState(false);
  const [bgc,setbgc] = useState(false);

  const HandleClick = () => {
    setdisplay(!display);
    setbgc(!bgc);

  }

  const [title, setTittle] =useState("Our Goal " )
    const [content, setContent] =useState("BIRD is an app designed to educated its users about the COVID-19 Virus. For those who want to take action or test their knowlage, there are also Donation links and quizes.")
    const [content2, setContent2] =useState("")
    const [content3, setContent3] =useState("")
    const [index5,setindex5] = useState(false);
    const [index6,setindex6] = useState(false);
    
    let bgcolor5 ="#FF7A00";
    if (index5 === true) {
      bgcolor5 ="#9A9999"
    };
    let bgcolor6 ="#9A9999";
    if (index6 === true) {
      bgcolor6 ="#FF7A00"
    };
    
    const aboutusClick =()=>{
      setTittle(subtext.aboutus.title);
      setContent(subtext.aboutus.content);
      setContent2(subtext.aboutus.content2);
      setContent3(subtext.aboutus.content3);
      setindex5(false);
      setindex6(false);
    }
    const teamClick =()=>{
      setTittle(subtext.team.title);
      setContent(subtext.team.content);
      setContent2(subtext.team.content2);
      setContent3(subtext.team.content3);
      setindex6(true);
      setindex5(true);
    }
  
  
  return (
    <div className="wrapper">
      <Head>
        <title>Home Page</title>:
      </Head>{" "}
      <div className="page ">
      <animated.div className="logo"  style={mainLogo} ><AppLogo Fontdisplay="none"/></animated.div>
      {/* <animated.div className="logo"  style={Fly} ><FlyBird /></animated.div> */}
      <animated.div className="logotext" style={logotext}><AppLogo display="none"/></animated.div>
      <animated.div className="Subtext" style={text}><p>Big Issues Ready for Discovery  </p></animated.div>
      
      <div className="aboutUs" > 
      <AboutUs contdisplay ={display ? "block" :"none"} 
      title={title} text={content} text2={content2} text3={content3}
      bgcolor5={bgcolor5 }  
      bgcolor6={bgcolor6 }
      
      aboutusClick={aboutusClick}
      teamClick={ teamClick} />
     </div>
      <div className="button">
        
      <Button routeTo ="/dashboard"/>
      <Button  text="About us" width="140px" bgcolor={bgc ? "#949494": "#C4C4C4"} onClick={HandleClick}/>
      </div>
      <div className="footer">
      ©2021 Group-7 Design1-Demo MDDD2C BCIT </div>
      <div className="bgc"> </div>
      
      
      
      </div>
      
      
    
   
   
    </div>
  )
}
