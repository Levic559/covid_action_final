import React from "react";
import styled, { keyframes } from "styled-components";
import {useRouter} from 'next/router';

const Avatar2Cont = styled.div`
display:flex;
flex-direction: column;
border-radius: 5px;
background-color: white;
width:${props=>props.width}px;
height:${props=>props.height}px;
position:${props=>props.position};
top:${props=>props.top}px;
left:${props=>props.left}px;
padding: 10px;
align-items:center;
justify-content:center;
min-height: 40%;
`;
const Avatar2Image = styled.img`
src:${props=>props.src};
border-radius: 200px 200px 200px 200px;
width: 70px;
height: 70px;
margin-top: 15px;
`;
const Avatar2Text = styled.p`
    display:inline-flex;
    margin-bottom: -10px;
    opacity:${props=>props.opacity};
    width:100px;
    height:150px;
    text-align: center;
    margin-bottom:15px;

`;


const Avatar2  = ({
    src = "/24.svg",
    width = 100,
    height= 100,
    position = "",
    left = "",
    top = "",
    routeTo = "/",
    text = "Indigeous Peoples Solidarity Fund",
    text1 ="Support indigeous-led charities addressing new and long-standing challenges in their communities.",
    opacity = "0.7"
}) =>{
    const router = useRouter();
    
    return <Avatar2Cont position = {position} left = {left} top = {top} width = {width} height = {height} onClick = {()=>router.push(routeTo)}>
        <Avatar2Text>{text}</Avatar2Text>
        <Avatar2Text opacity = {opacity}>{text1}</Avatar2Text>
    </Avatar2Cont>
}
export default Avatar2;