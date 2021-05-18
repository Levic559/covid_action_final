import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const Option2cont = styled.div`
    display:inline-flex;
    flex-direction: column;
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    overflow:hidden;
    position: absolute;
    right: 20px;
    top: 450px;
`;
const Option2image  = styled.img`
    src:${props=>props.src};
    border-radius: 33px 33px 33px 33px;
    position:${props=>props.position};
    top:${props=>props.top};
    bottom:${props=>props.bottom};
    max-width: 320px;
    max-height:auto;
    opacity:${props=>props.opacity};
    
`;



const Image2  = ({
    src = "/22.svg",
    width = 400,
    height= 200,
    routeTo = "/",
    position = "absolute",
    top = "100",
    bottom = "100",
    opacity = "/"
}) =>{
    const router = useRouter();
    return <Option2cont position = {position} top = {top} bottom = {bottom} onClick ={()=>router.push(routeTo)} > 
    
    <Option2image src = {src} width = {width} height = {height} opacity = {opacity}></Option2image>
    
    </Option2cont>
}
export default Image2;