import Banner from '../../comps/Banner';
import HamburgerMenu from '../../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../../comps/Page'
import ChatBubble from '../../comps/ChatBubble'
import NavButton from '../../comps/NavButtonInfo'
import {info} from '../../data/Vaccine';
import {useRouter} from 'next/router';
import Avatar from '../../comps/Spaeker'

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




var page=1;


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


  const [head, setHead] = useState(info.one.head);
  const [text, setText] = useState(info.one.text);
  const [component, setcomponent] = useState(info.one.component);
  const [display, setDisplay] = useState(info.one.display);
  const [bgcolor1, setC1] = useState(info.one.bgcolor1);
  const [bgcolor2, setC2] = useState(info.one.bgcolor2);
  const [bgcolor3, setC3] = useState(info.one.bgcolor3);
  const [bgcolor4, setC4] = useState(info.one.bgcolor4);



  // for fowraed button
  const nextInfo = () => 
  {
    page++;
     if (page == 2)
    {
        setHead(info.two.head);
        setText(info.two.text);
        setcomponent(info.two.component);
        setDisplay(info.two.display);
        setC1(info.two.bgcolor1);
        setC2(info.two.bgcolor2);
        setC3(info.two.bgcolor3);
        setC4(info.two.bgcolor4);

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

    }

    else if (page === 5)
    {
      setHead(info.five.head)
      setText(info.five.text)
      setcomponent(info.five.component)
    }

    else if (page == 6)
    {
      page = 5
    }
  }

  //for back button
  const backInfo = () => 
  {
    page--;
    
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

    }
    if (page == 2)
    {
        setHead(info.two.head);
        setText(info.two.text);
        setcomponent(info.two.component);
        setDisplay(info.two.display);
        setC1(info.two.bgcolor1);
        setC2(info.two.bgcolor2);
        setC3(info.two.bgcolor3);
        setC4(info.two.bgcolor4);

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

    }

    else if (page == 0)
    {
        page =1
    }
    console.log("page " + page)
  }





  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Vaccine Info" onClick={OpenMenu} routeTo="/dashboard"/>

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
            display5="none"
            display6="none"
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
