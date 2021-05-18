import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const Text2cont = styled.div`
    display: inline-flex;
    overflow: hidden;
    
    border-radius: 10px;
    flex-direction: column;
    margin: 30px;
    position: ${props=>props.position};
    top: ${props=>props.top}px;
    left: ${props=>props.left}px;
    
`;
const Text2text = styled.p`
    font-size: 20px;
    opacity: ${props=>props.opacity};
`;


const Text2  = ({
    text = "Contact Us:", 
    text1 = "Sali136@my.bcit.ca", 
    opacity = "/",
    position = "/",
    top = "/",
    left = "/",
    routeTo = "/",
}) =>{
    const router = useRouter();
    return <Text2cont position = {position} top = {top} left = {left} onClick ={()=>router.push(routeTo)} > 
    <Text2text>{text}</Text2text>
    <Text2text opacity = {opacity}>{text1}</Text2text>
    
    </Text2cont>
}
export default Text2;
