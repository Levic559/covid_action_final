import Button from '../Button';
import react ,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    width: 227px;
    height: 210px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self:center;
    position:relative;
    top:43px;
`

const Symp1 = styled.img`
    width: 227px;
    height:210px;
    opacity: ${props=>props.opacity0};
    transition: 1s opacity;
`
const Symp2 = styled.img`
    width: 227px;
    height:210px;
    position:relative;
    bottom:208px;
    left:4px;
    opacity: ${props=>props.opacity1};
    transition: 1s opacity;

`

const Symp3 = styled.img`
    width: 227px;
    height:210px;
    position:relative;
    bottom:417px;
    right: 8px;
    opacity: ${props=>props.opacity2};
    transition: 1s opacity;
`

const CommonSymp = () =>{
    const [firstO, SetFirst] = useState(false)
    const [secondO, SetSecond] = useState(false)
    var opacity0=1
    var opacity1=0
    var opacity2=0

    if (firstO == true)
    {   
        opacity0=0
        opacity1=1
    }
    if (secondO == true)
    {
        opacity1=0
        opacity2=1
    }

    const HandleEvent = () => {
        setTimeout(HandleFirst, 3000)
        setTimeout(HandleSecond, 6000)
        console.log()

        setTimeout(()=>{
            SetFirst(false);
            SetSecond(false);
        }, 9000)
    }
    
    const HandleFirst = () => {
        SetFirst(!firstO)
    }

    const HandleSecond = () => {
        SetSecond(!secondO)
    }

    useEffect (() => {
        var interval
        HandleEvent();
        interval = setInterval(HandleEvent, 9001);
    }, []);

    return <Cont>
        <Symp1 src="/patient-fever1.svg" opacity0={opacity0}/>
        <Symp2 src="/patient-cough.svg" opacity1={opacity1}/>
        <Symp3 src="/patient-heat1.svg" opacity2={opacity2}/>
    </Cont>
}

export default CommonSymp;