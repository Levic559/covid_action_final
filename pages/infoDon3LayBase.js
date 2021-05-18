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
    background-color: #DEDEDE;
    margin:70px;
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
            <div><Image src = "/18.svg" text = "Donate To The Charity Nav And The Needy" /></div>
            <div><Text2 opacity = "0.5"position = "absolute" top = "250" left ="-15"text ="Charity Navigator is the world’s largest and most-utilized independent charity evaluator. "  text1 ="The organization guides informed giving by evaluating the financial health, accountability, and transparency of charities and by providing data for more than 1.6 million nonprofits, accessed more than 12 million times annually. Charity Navigator does not charge the organizations it evaluates, ensuring unbiased evaluations, nor does it charge the public for this trusted data. "/></div>
            <div><Button  position = "absolute" left = "200" top = "700" text = "Go to the Page" routeTo = "https://www.charitynavigator.org/index.cfm?bay=topten.detail&listid=18"/></div>
    
           
        </Optioncont> 
      </Page>

    </UpperLayer>

    <HamburgerMenu z={z} />

    

  </MainCont>

  )
}