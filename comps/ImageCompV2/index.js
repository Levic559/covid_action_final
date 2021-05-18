//Full bird Icon for Levi
import React, {useEffect, useState} from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Button from "../Button";

const Cont = styled.div`
  width: auto;
  height: 210px;
  align-self:center;
  position:relative;
  display:flex;
  align-items:center;
  flex-direction:column;
`

const ButtonCont = styled.div`
  align-self:center;
  position:relative;
  bottom: 20px;
  opacity: ${props=>props.opacity};
`


const Image = styled.img`
  width: 300px;
  height:auto;
  position:relative;
  bottom:40px;
`

const CounterCont = styled.div`
  position:relative;
  bottom:210px;
  left: 104px;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Counter = styled.div`
  align-self:center;
  font-size: 25px;
`

 var counter = 1
 var quar
const Quarantine = ({


}) => {
  const [background, SetBG] = useState("/Quarantine1.svg");
  const [days, SetDays] = useState (counter)
  var opacity=1;

  const HandleDays = () => 
  {
    if (counter == 14)
    {
      SetDays(counter++)
      clearInterval(quar)
      SetBG("/Quarantine2.svg")
    }
    else
    {
      SetDays(counter++)
    }
    console.log(counter)
  }

  if (days > 1)
  {
    opacity=0;
  }

  const HandleClick = () => {
    if (counter == 1 )
    {
      HandleDays();
      HandleDays();
      quar = setInterval(HandleDays, 400);
      return () => {
        counter = 1
        SetDays(counter)
        SetBG("/Quarantine1.svg")
      }
    }
  }

  return <Cont>
    <ButtonCont opacity={opacity}>
      <Button onClick={HandleClick} routeTo="" text="Start Quarantine"/>
    </ButtonCont>

   <Image src={background}/>
   <CounterCont>
     <Counter>
       {days}
     </Counter>
   </CounterCont>
  </Cont>
}

export default Quarantine;