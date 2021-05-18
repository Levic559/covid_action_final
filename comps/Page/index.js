import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import ChatBubble from '../ChatBubble';

const PageComponent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    right: ${props=>props.right}px;
    transition: right .5s;
    background-color: #F2E4D4;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    overflow: scroll;
    
`


const Page = ({
    right=0,
    children
}) => {
    return <PageComponent right={right} className="bgc2" >
        {children}
        
        
     
    </PageComponent>
    
}

export default Page;