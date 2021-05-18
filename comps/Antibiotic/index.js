import Button from '../Button';
import react ,{useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    width: 227px;
    height: 259px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self:center;
`

const VirusCont = styled.div`
    opacity: ${props=>props.opacity};
`

const Virus = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
    top: ${props=>props.top}px;
    transition: top 1s;
`

const Pill1 = styled.img`
    width: 60px;
    height: 28px;
`

const Pill2 = styled.img`
    width: 60px;
    height: 28px;
    position: relative;
    bottom: 42px;
    opacity: ${props=>props.opacity};
    transition: opacity .3s;
`

const Antib = () => {
    const [virusstate, SetVirus] = useState(false)
    const [pillstate, SetPill] = useState(false)
    const [buttonstate, SetButton] = useState(false)
    var top = -25
    var opacitypill = 0
    var opacitybutt = 1;

    if (virusstate == true)
    {
        top= 16
    }

    if (pillstate == true)
    {
        opacitypill = 1;
    }

    if (buttonstate == true)
    {
        opacitybutt = 0;
    }



    const HandleClick = () => {

        SetButton(true)
        SetVirus(true)
        setTimeout(HandlePill, 1000)
        
    }

    const HandlePill = () => {
        SetPill(true)
    }

    return <Cont>
        <VirusCont opacity={opacitybutt}>
            <Button text="Click Me" onClick={HandleClick} routeTo=""/>
        </VirusCont>

        <Virus src="/virus.svg" top={top}/>
        <Pill1 src="/pill.svg" />
        <Pill2 src="/pill-broken.svg" opacity={opacitypill}/>
    </Cont>
}

export default Antib;