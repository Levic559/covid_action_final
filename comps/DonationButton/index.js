import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const Buttoncont = styled.button`
    border-radius:5px;
    border:none;
    background-color:#C4C4C4;
    padding-left: 10px;
    padding-right:10px;
    display:inline-flex;
    position: ${props=>props.position};
    top: ${props=>props.top}px;
    left: ${props=>props.left}px;
`;
const Buttoninput = styled.p`
    display:inline-flex;
    background-color:#C4C4C4;
    color: #FFF;
    border-radius:10px;
    border:none;
`;
const Buttonimage = styled.img`
    width: 25px;
    height: 25px;
    margin:8px;
    
    
`;
const Button = ({
    text = "Canada's Help",
    routeTo = "/",
    position = "/",
    top = "/",
    left = "/",
}) =>{
    const router = useRouter();
    return <Buttoncont position = {position} top = {top} left = {left}  onClick = {()=>window.open(routeTo)}>
        <Buttoninput >{text}</Buttoninput>
        <Buttonimage src = "/arrow-white-right.svg"></Buttonimage>
    </Buttoncont>
}
export default Button;