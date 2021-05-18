import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page';
import ChatBubble from '../comps/ChatBubble';
import NavButton from '../comps/NavButton';
import Image from '../comps/OptionPages';
import Button from '../comps/DonationButton';
import Avatar2 from '../comps/Avatar2Don';



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
  position:absolute;
  bottom:255px;
`
const Optioncont = styled.div`
    display: flex;
    background-color: #DEDEDE;
    margin:70px 70px 70px 65px;
    padding: 20px;
    
    border: 1px solid #DEDEDE;
    border-radius:10px;
    flex-direction: column;
    position:absolute;
    top: 40px;
    bottom: -20px;
    left:-40px;
    right: -55px;
`;







export default function Home() {

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

  console.log(menustate, right)
  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Help" onClick={OpenMenu} routeTo="/infoDonBase"/>
        
       <Optioncont>
            <div><Image src = "/20.svg" text = "Donate To The Canada Helps" /></div>
            <div><Avatar2 position = "absolute" top = "290" left = "-1"/></div>

            <div><Button  position = "absolute" left = "200" top = "700" text = "Go to the Page" routeTo = "https://www.canadahelps.org/en/donate/"/></div>

           
        </Optioncont> 
      </Page>

    </UpperLayer>

    <HamburgerMenu z={z} />

    
  </MainCont>

  )
}