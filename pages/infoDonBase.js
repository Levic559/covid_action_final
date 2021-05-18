import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page';
import ChatBubble from '../comps/ChatBubble';
import NavButton from '../comps/NavButton';
import Option from '../comps/OptionPages';
import {useRouter} from 'next/router';

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
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: 130px;

    
`





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
  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Make Donation" onClick={OpenMenu} routeTo="/infoOptionsBase" />
        
       <Optioncont>
           <div><Option src = "/20.svg" text = "Canada Help's" routeTo="https://www.canadahelps.org/en/donate/"/></div> 
           <div><Option src = "/19.svg" text = "Food Bank"  routeTo="https://support.foodbankscanada.ca/site/Donation2;jsessionid=00000000.app20122b?df_id=1500&mfc_pref=T&1500.donation=form1&NONCE_TOKEN=E41165665A193A27E0D51B9ADE06E56D"/></div> 
           <div><Option src = "/18.svg" text = "Charity Nav" routeTo="https://www.charitynavigator.org/index.cfm?bay=topten.detail&listid=18"/></div> 
           <div><Option src = "/16.svg" text = "VCH UBC" routeTo="https://join.vghfoundation.ca/give/329164/#!/donation/checkout"/></div> 
           <div><Option src = "/21.svg" text = "Red Cross" routeTo="https://donate.redcross.ca/page/22054/donate/1?ea.client.id=1951&ea.campaign.id=56787&gclid=Cj0KCQjwp86EBhD7ARIsAFkgakg-GAlfkkz1GCkuHdjKVNb0aBioBmJeSn2JUDdz4gPRY6tS48VPMuUaAvTPEALw_wcB"/></div> 
        </Optioncont> 
      </Page>

    </UpperLayer>

        <HamburgerMenu z={z}/>


  </MainCont>

  )
}
