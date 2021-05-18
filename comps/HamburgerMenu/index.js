//Hamburger Menu for Adrian
import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const HamburgerContainer = styled.div `
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width:178px;
    height: 100vh;
    background-color: #C4C4C4;
    align-items:center;
    z-index:${props=>props.z};
    position:absolute;
    float:right;
    right:0px;
`

const LinkContainer = styled.div `
    color: #545454;
    font-size: 20px;
    font-family: Roboto;
    font-weight: bold;
    display:flex;
    flex-direction:column;
    align-self:center;
    justify-content:center;
`
const Divider = styled.div `
    background-color: #545454;
    width:100%;
    height: 9px;
`



const HamburgerMenu = ({
    // props
    z
}) => {
    const router = useRouter();
    return <HamburgerContainer z={z}>
        <Divider />
        <LinkContainer onClick={()=>router.push("/dashboard")}>
            Home
        </LinkContainer>
        <Divider />
        
        <LinkContainer onClick={()=>router.push("/LiveStatus")}>
            Live Status
        </LinkContainer>
        <Divider />

        <LinkContainer onClick={()=>router.push("/items/GInfo")}>
            General Info
        </LinkContainer>
        <Divider />

        <LinkContainer onClick={()=>router.push("/items/VInfo")}>
            Vaccine Info
        </LinkContainer>
        <Divider />

        <LinkContainer onClick={()=>router.push("/items/GovernInfo")}>
            Govern. Policies
        </LinkContainer>
        <Divider />

        <LinkContainer onClick={()=>router.push("/infoOptionsBase")}>
            Take Action
        </LinkContainer>
        <Divider />
    </HamburgerContainer>
}

export default HamburgerMenu;