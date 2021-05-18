import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const Textcont = styled.div`
    display: inline-flex;
    background-color: #C4C4C4;
    overflow: hidden;
    padding: 60px;
    text-align: center;
    border-radius: 10px;
    flex-direction: column;
    margin: 30px;
    position: ${props=>props.position};
    top: ${props=>props.top}px;
    left: ${props=>props.left}px;
    
`;
const Texttext = styled.p`
    font-size: 20px;
`;


const Text  = ({
    text = "Contact Us:", 
    text1 = "Sali136@my.bcit.ca", 
    text2 = "Sali136@my.bcit.ca", 
    text3 = "Sali136@my.bcit.ca", 
    position = "/",
    top = "/",
    left = "/",
    routeTo = "/",
}) =>{
    const router = useRouter();
    return <Textcont position = {position} top = {top} left = {left} onClick ={()=>router.push(routeTo)} > 
    <Texttext>{text}</Texttext>
    <Texttext>{text1}</Texttext>
    <Texttext>{text2}</Texttext>
    <Texttext>{text3}</Texttext>
    
    </Textcont>
}
export default Text;
