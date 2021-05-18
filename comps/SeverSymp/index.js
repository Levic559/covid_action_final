import Button from '../Button';
import react ,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    width: 227px;
    height: 259px;
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
    opacity: ${props=>props.opacity1};
    transition: .6s opacity;
`
const Symp2 = styled.img`
    width: 227px;
    height:auto;
    position:relative;
    bottom:210px;
    right:0px;
    opacity: ${props=>props.opacity2};
    transition: .6s opacity;
`

const Symp3 = styled.img`
    width: 227px;
    height:auto;
    position:relative;
    bottom:435px;
    right: 4px;
    opacity: ${props=>props.opacity3};
    transition: .6s opacity;
`

const Symp4 = styled.img`
    width: 241px;
    height:auto;
    position:relative;
    bottom:705px;
    right: 4px;
    opacity: ${props=>props.opacity4};
    transition: .6s opacity;
`

const SevereSymp = () => {
    const [firstO, SetFirst] = useState(false)
    const [secondO, SetSecond] = useState(false)
    const [thirdO, SetThird] = useState(false)
    var opacity1 = 1
    var opacity2 = 0
    var opacity3 = 0
    var opacity4 = 0

    if (firstO == true)
    {
        opacity1=0;
        opacity2=1;
    }
    if (secondO == true)
    {
        opacity2=0;
        opacity3=1;
    }
    if (thirdO == true)
    {
        opacity3=0;
        opacity4=1;
    }

    const HandleEvent = () => {
        setTimeout(HandleFirst, 3000)
        setTimeout(HandleSecond, 6000)
        setTimeout(HandleThird, 9000)

        setTimeout(()=>{
            SetFirst(false);
            SetSecond(false);
            SetThird(false);
        }, 12000)
    }

    const HandleFirst = () => {
        SetFirst(!firstO)
    }
    const HandleSecond = () => {
        SetSecond(!secondO)
    }
    const HandleThird = () => {
        SetThird(!thirdO)
    }

    

    useEffect(()=>{
        var interval
        HandleEvent();
        interval = setInterval(HandleEvent, 12001);
    },[]);


    return <Cont> 
        <Symp1 src="/patient-heat2.svg" opacity1={opacity1}/>
        <Symp2 src="/patient-heat3.svg" opacity2={opacity2}/>
        <Symp3 src="/patient-sickly.svg" opacity3={opacity3}/>
        <Symp4 src="/patient-fever2.svg" opacity4={opacity4}/>
    </Cont>
}

export default SevereSymp;
