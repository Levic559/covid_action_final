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
    align-self: center;
`

const Img1 = styled.img`
    width: 227px;
    height:auto;
    position:relative;
    top:50px;
`
const Img2 = styled.img`
    width: 227px;
    height:auto;
    position:relative;
    bottom:105px;
    z-index:1;
    opacity: ${props=>props.opacity};
    transition: 1s opacity;
`

const Hands = () => {
    const [opacitystate, SetOp] = useState(false)
    var opacity=0;

    if (opacitystate === true)
    {
        opacity=1;
    }

    const HandleEvent = () => {
        SetOp(!opacitystate)
    }


    return <Cont>
        {opacity == 0 ?
        <Button onClick={HandleEvent}
        text="Click for Safety"
        routeTo=""
        />:
        <Button onClick={HandleEvent}
        text="Undo" 
        routeTo=""
        /> }
        <Img1 src="/hands.svg"/>
        <Img2 src="/hands-wash.svg" 
        opacity={opacity}
        />
    </Cont>
}

export default Hands;