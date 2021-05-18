import Banner from "../../comps/Banner";
import HamburgerMenu from "../../comps/HamburgerMenu";
import styled from "styled-components";
import React, { useState } from "react";
import Page from "../../comps/Page";
import ChatBubble from "../../comps/ChatBubble";
import QuizOption from "../../comps/QuizOptions";
import Avatar from "../../comps/Spaeker";
import Button from "../../comps/Button";
import { info } from "../../data/QuizResult";
import { useRouter } from "next/router";

//custom tags for base page
const MainCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpperLayer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  position: relative;
`;

export default function Items() {
  const [menustate, setMenuState] = useState(false);
  const [zindex, setZIndex] = useState(false);
  var right = 0;
  var z = -1;
  if (menustate === true) {
    right = 178;
    var z = 0;
  }

  if (zindex === true) {
    z = 2;
  }

  const OpenMenu = () => {
    setMenuState(!menustate);
    if (menustate === false) {
      setTimeout(HandleZ, 500);
    } else {
      setTimeout(HandleZ, 1);
    }
    console.log(right);
  };

  const HandleZ = () => {
    setZIndex(!zindex);
  };

  const router = useRouter();
  const { QuizResult } = router.query;
  var head ="";
  var text1 ="";
  var text2 ="";
  var component= "";

  if (QuizResult === "one") {
    head = info.one.head;
    text1 = info.one.text1;
    text2 = info.one.text2;
    component = info.one.component;
  }
  if (QuizResult === "two") {
    head = info.two.head;
    text1 = info.two.text1;
    text2 = info.two.text2;
    component = info.two.component;
  }
  if (QuizResult === "three") {
    head = info.three.head;
    text1 = info.three.text1;
    text2 = info.three.text2;
    component = info.three.component;
  }
  if (QuizResult === "four") {
    head = info.four.head;
    text1 = info.four.text1;
    text2 = info.four.text2;
    component = info.four.component;
  }

  const SurveyCont = styled.div`
    position: absolute;
    z-index: 1;
    justify-content: center;
    margin-top: 150px;
  `;
  const Result = styled.div`
    font-size: 65px;
    font-weight: 400;
    color: orange;
    justify-content: center;
    text-align: center;
    margin: 50px;
  `;
  const Annousement = styled.div`
    font-size: 24px;
    font-weight: 400;
    color: #c4c4c4;
    justify-content: center;
    text-align: center;
  `;
  const Comment = styled.div`
    font-size: 24px;
    font-weight: 400;
    color: orange;
    justify-content: center;
  `;
  const ButtonBigCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 75px;
  `;

  console.log(menustate, right);
  return (
    <MainCont>
      <UpperLayer>
        <Page right={right}>
          <Banner text="General Information - Quiz" onClick={OpenMenu} />
          <ChatBubble   />
          <SurveyCont>
          <Annousement>
          {head}
          </Annousement>
          <Result>
          {text1}
          </Result>
          <Comment>
          {text2}
          </Comment>
            <ButtonBigCont>
              <Button text="Read info" routeTo="/items/GovernInfo" />
              <Button text="Retake the Quiz" routeTo="/GQ3" />
            </ButtonBigCont>
          </SurveyCont>
          {component}
        </Page>
      </UpperLayer>

      <HamburgerMenu z={z} />
    </MainCont>
  );
}
