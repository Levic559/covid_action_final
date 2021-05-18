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

  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Live-Status" onClick={OpenMenu} routeTo="/dashboard"/>

        <ChatBubble 
          head={info.zero.head}
          text={""}
          component={info.zero.component}
        />
        
        {/* <SpeakerContainer>
          <Speaker src="/vaccine-man.svg" />
        </SpeakerContainer> */}

        <NavContainer>
          <NavButton 

          />
        </NavContainer>
        <Avatar src="/vaccine-man.svg"/>
      </Page>

    </UpperLayer>

        <HamburgerMenu z={z}/>

  </MainCont>

  )
}
