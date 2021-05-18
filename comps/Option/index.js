import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const Avatarcont = styled.div`
    display:flex;
    flex-direction: column;
    margin: 25px;
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    overflow:hidden;
    border-radius: 10px 10px 10px 10px;
    
    
`;
const Avatarimage  = styled.img`
    src:${props=>props.src};
    margin-bottom: -40px;
    border-radius: 10px 10px 10px 10px;
    
    
    
    
`;
const Avatartext = styled.span`
    background-color: rgba(196,196,196,0.9);
    color: #FFF;
    padding:10px;
    justify-content:center;
    align-items:center;
    border-radius:0px 0px 10px 10px;
    text-align: center;
    font-weight: 600;
    overflow:hidden;
    font-size:20px;
`;

const Avatar  = ({
    src = "/1.svg",
    width = 270,
    height= 160,
    text = "General info",
    routeTo = "/",
    marginBottom = 25,
   
   
}) =>{
    const router = useRouter();
    return <Avatarcont onClick ={()=>router.push(routeTo)} width = {width} height = {height}> 
    
    <Avatarimage src = {src}></Avatarimage>
    <Avatartext marginBottom = {marginBottom}>{text}</Avatartext>
    
    </Avatarcont>
}
export default Avatar;