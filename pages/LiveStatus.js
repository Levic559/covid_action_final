import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page'
import ChatBubble from '../comps/ChatBubble'
import NavButton from '../comps/NavButtonInfo'
import {info} from '../data/LiveStatus';
import {useRouter} from 'next/router';
import Avatar from '../comps/Spaeker'

//custom tags for base page
const MainCont = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperLayer = styled.div `
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  position: relative;
`


// for speaker only
const SpeakerContainer = styled.div`
  width: 276px;
  height:221px;
  overflow:hidden;
`

const Speaker = styled.img`
  width: 100%;
  height:100%;
  position:relative;
`

const NavContainer = styled.div`
position:relative;
bottom:20px;
`




var page=0;


export default function Home() {
    const router = useRouter();
  //for menu
  const [menustate, setMenuState] = useState(false);
  const [zindex, setZIndex] = useState(false)
  var right=0;
  var z=-1
  if (menustate === true)
  {
    right=178;
  }

  if (zindex === true)
  {
    z=2
  }


const OpenMenu = () => {
    setMenuState(!menustate);
    if (menustate === false)
    {
      setTimeout(HandleZ, 500)
    }
    else
    {
      setTimeout(HandleZ, 1)
    }
}

const HandleZ = () => {
  setZIndex(!zindex)
}
  // for navigation


  const [head, setHead] = useState(info.zero.head);
  const [text, setText] = useState(info.zero.text);
  const [component, setcomponent] = useState(info.zero.component);
  const [display, setDisplay] = useState(info.zero.display);
  const [bgcolor1, setC1] = useState(info.zero.bgcolor1);
  const [bgcolor2, setC2] = useState(info.zero.bgcolor2);
  const [bgcolor3, setC3] = useState(info.zero.bgcolor3);
  const [bgcolor4, setC4] = useState(info.zero.bgcolor4);
  const [bgcolor5, setC5] = useState(info.zero.bgcolor5);
  const [bgcolor6, setC6] = useState(info.zero.bgcolor6);


  // for fowraed button
  const nextInfo = () => 
  {
    page++;
     if (page == 1)
    {
        setHead(info.one.head);
        setText(info.one.text);
        setcomponent(info.one.component);
        setDisplay(info.one.display);
        setC1(info.one.bgcolor1);
        setC2(info.one.bgcolor2);
        setC3(info.one.bgcolor3);
        setC4(info.one.bgcolor4);
        setC5(info.one.bgcolor5);
        setC6(info.one.bgcolor6);
    }
    else if (page == 2)
    {
        setHead(info.two.head);
        setText(info.two.text);
        setcomponent(info.two.component);
        setDisplay(info.two.display);
        setC1(info.two.bgcolor1);
        setC2(info.two.bgcolor2);
        setC3(info.two.bgcolor3);
        setC4(info.two.bgcolor4);
        setC5(info.two.bgcolor5);
        setC6(info.two.bgcolor6);
    }

    else if (page == 3)
    {
        setHead(info.three.head);
        setText(info.three.text);
        setcomponent(info.three.component);
        setDisplay(info.three.display);
        setC1(info.three.bgcolor1);
        setC2(info.three.bgcolor2);
        setC3(info.three.bgcolor3);
        setC4(info.three.bgcolor4);
        setC5(info.three.bgcolor5);
        setC6(info.three.bgcolor6);
    }

    else if (page == 4)
    {
        setHead(info.four.head);
        setText(info.four.text);
        setcomponent(info.four.component);
        setDisplay(info.four.display);
        setC1(info.four.bgcolor1);
        setC2(info.four.bgcolor2);
        setC3(info.four.bgcolor3);
        setC4(info.four.bgcolor4);
        setC5(info.four.bgcolor5);
        setC6(info.four.bgcolor6);
    }
    else if (page == 5)
    {
        setHead(info.five.head);
        setText(info.five.text);
        setcomponent(info.five.component);
        setDisplay(info.five.display);
        setC1(info.two.bgcolor1);
        setC2(info.five.bgcolor2);
        setC3(info.five.bgcolor3);
        setC4(info.five.bgcolor4);
        setC5(info.five.bgcolor5);
        setC6(info.five.bgcolor6);
    }

    else if (page === 6)
    {
      // setHead(info.Six.head)
      // setText(info.Six.text)
      // setcomponent(info.Six.component)
      router.push("/dashboard")
    }

    else if (page == 7)
    {
      page = 6
    }
  }

  //for back button
  const backInfo = () => 
  {
    page--;
    if (page ==0)
    {
      setHead(info.zero.head);
      setText(info.zero.text);
      setcomponent(info.zero.component);
      setC1(info.zero.bgcolor1)
      setC2(info.zero.bgcolor2)
      setC3(info.zero.bgcolor3)
      setC4(info.zero.bgcolor4)
      setC5(info.zero.bgcolor5)
      setC6(info.zero.bgcolor6)
    }
    
    else if (page == 1)
    {
        setHead(info.one.head);
        setText(info.one.text);
        setcomponent(info.one.component);
        setDisplay(info.one.display);
        setC1(info.one.bgcolor1);
        setC2(info.one.bgcolor2);
        setC3(info.one.bgcolor3);
        setC4(info.one.bgcolor4);
        setC5(info.one.bgcolor5);
        setC6(info.one.bgcolor6);

    }
    else if (page == 2)
    {
        setHead(info.two.head);
        setText(info.two.text);
        setcomponent(info.two.component);
        setDisplay(info.two.display);
        setC1(info.two.bgcolor1);
        setC2(info.two.bgcolor2);
        setC3(info.two.bgcolor3);
        setC4(info.two.bgcolor4);
        setC5(info.two.bgcolor5);
        setC6(info.two.bgcolor6);

    }

    else if (page == 3)
    {
        setHead(info.three.head);
        setText(info.three.text);
        setcomponent(info.three.component);
        setDisplay(info.three.display);
        setC1(info.three.bgcolor1);
        setC2(info.three.bgcolor2);
        setC3(info.three.bgcolor3);
        setC4(info.three.bgcolor4);
        setC5(info.three.bgcolor5);
        setC6(info.three.bgcolor6);

    }

    else if (page == 4)
    {
        setHead(info.four.head);
        setText(info.four.text);
        setcomponent(info.four.component);
        setDisplay(info.four.display);
        setC1(info.four.bgcolor1);
        setC2(info.four.bgcolor2);
        setC3(info.four.bgcolor3);
        setC4(info.four.bgcolor4);
        setC5(info.four.bgcolor5);
        setC6(info.four.bgcolor6);

    }
    else if (page == 5)
    {
        setHead(info.five.head);
        setText(info.five.text);
        setcomponent(info.five.component);
        setDisplay(info.five.display);
        setC1(info.five.bgcolor1);
        setC2(info.five.bgcolor2);
        setC3(info.five.bgcolor3);
        setC4(info.five.bgcolor4);
        setC5(info.five.bgcolor5);
        setC6(info.five.bgcolor6);
    }

    // else if (page == 6)
    // {
    //     router.push("/dashboard")
    // }
    else if (page == -1)
    {
      page = 0;
    }
    console.log("page " + page)
  }





  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Live-Status" onClick={OpenMenu} routeTo="/dashboard"/>

        <ChatBubble 
          head={head}
          text={text}
          component={component}
        />
        
        {/* <SpeakerContainer>
          <Speaker src="/vaccine-man.svg" />
        </SpeakerContainer> */}

        <NavContainer>
          <NavButton 
            bgcolor1={bgcolor1}
            bgcolor2={bgcolor2}
            bgcolor3={bgcolor3}
            bgcolor4={bgcolor4}
            bgcolor5={bgcolor5}
            bgcolor6={bgcolor6}
            nextFunction={nextInfo}
            backFunction={backInfo}
          />
        </NavContainer>
        <Avatar src="/vaccine-man.svg"/>
      </Page>

    </UpperLayer>

        <HamburgerMenu z={z}/>


    

  </MainCont>

  )
}
