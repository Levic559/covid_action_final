import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page';
import ChatBubble from '../comps/ChatBubble';
import NavButton from '../comps/NavButton';
import Image from '../comps/OptionPages';
import Button from '../comps/DonationButton';
import Text from '../comps/Text/index';
import Text2 from '../comps/Text/index2';


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
    flex-direction: column;
    background-color: #DEDEDE;
    margin:70px;
    padding: 20px;
    border: 1px solid #DEDEDE;
    border-radius:10px;
    width:361px;
    height: 650px;
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
            <Image routeTo="" src = "/21.svg" text = "Donate To The Red Cross" />
            <Text2 text ="The Canadian Red Cross "  text1 ="Mission is to improve the lives of vulnerable people by mobilizing the power of humanity in Canada and around the world."/>
            <Button   routeTo = "https://donate.redcross.ca/page/22054/donate/1?ea.client.id=1951&ea.campaign.id=56787&gclid=Cj0KCQjwp86EBhD7ARIsAFkgakg-GAlfkkz1GCkuHdjKVNb0aBioBmJeSn2JUDdz4gPRY6tS48VPMuUaAvTPEALw_wcB"/>
        </Optioncont> 
      </Page>

    </UpperLayer>

    <HamburgerMenu z={z} />

    

  </MainCont>

  )
}