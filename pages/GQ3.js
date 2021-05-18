import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page'
import ChatBubble from '../comps/ChatBubble'
import QuizOption from '../comps/QuizOptions'
import Avatar from '../comps/Spaeker'
import Button from '../comps/Button'
import SurveyComponent3 from '../comps/survey/Survey3.jsx'


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

const PageCont =styled.div`
display: flex;
flex-direction:column;
align-items:center;
width:100%;
`
const Question = styled.div`
    display:inline-flex;
    align-items:center;
`
const SurveyCont= styled.div`
  position:absolute;
  z-index:1;
  justify-content:center;
  margin-top:150px;
`

export default function Home() {
  const [menustate, setMenuState] = useState(false);
  const [zindex, setZIndex] = useState(false)
  var right=0;
  var z=-1
  if (menustate === true)
  {
    right=178;
    var z = 0;
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
    console.log(right)
}
  console.log(menustate, right)
  return (<MainCont>
    <UpperLayer>
      <Page right={right}>
        <PageCont  className="bgc2">
        <Banner text="Government Policies - Quiz" onClick={OpenMenu} routeTo="/infoQuizOptionsBase" />
        
        <ChatBubble display="none"/>
        <SurveyCont>
        <SurveyComponent3/>
        </SurveyCont>
        <Avatar/>
        

        </PageCont>
      </Page>
     
    </UpperLayer>

    <HamburgerMenu z={z}/>

  </MainCont>

  )
}
