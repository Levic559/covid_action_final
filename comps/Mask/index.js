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

const Patient1 = styled.img`
    width: 227px;
    height:210px;
`
const Patient2 = styled.img`
    width: 227px;
    height:210px;
    position:relative;
    bottom:209px;
    opacity: ${props=>props.opacity};
    transition: 1s opacity;
`

const Mask = () => {
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
        routeTo=""/> }
        <Patient1 src="/patient.svg"/>
        <Patient2 src="/patient-mask1.svg" 
            opacity={opacity}
        />
    </Cont>
}

export default Mask;