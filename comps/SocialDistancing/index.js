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
const Row = styled.div`
    display:flex;
    flex-direction:row;
`

const Person1 = styled.img`
    width:154px;
    height:142px;
    position:relative;
    right:${props=>props.right}px;
    transition: right 1s;
`

const Person2 = styled.img`
    width:154px;
    height:142px;
    position:relative;
    left: ${props=>props.left}px;
    transition: left 1s;
`

const Arrow = styled.img`
    width: 120px;
    height:auto;
    position:absolute;
    float:top;
    top: 500px;
    opacity:${props=>props.opacity};
    transition: 1s opacity;
`

const Meters = styled.div`
    position: absolute;
    top: 530px;
    color: #999;
    font-weight:bold;
    font-size: 20px;
    font-family:'Archivo';
    opacity:${props=>props.opacity};
    transition: 1s opacity;
`



const SD = () => {
    const [animation, RunIt] = useState(false)
    const [setOpacity, ChangeOpacity] = useState(false)
    var left = 0;
    var right = 0;
    var opacity = 0;

    if (animation === true){
        left = 30;
        right = 30;
    }

    if(setOpacity === true)
    {
        opacity = 1;
    }

    const HandleClick = () => {
        
        if (setOpacity === false && animation == false && opacity == 0)
        {
            setTimeout(HandleOpacity, 600)
            RunIt(true)
        }
        else if (setOpacity == true && animation == true && opacity == 1)
        {
            setTimeout(HandleOpacity, 1)
            RunIt(false)
        }
        
    }

    const HandleOpacity = () => {
        ChangeOpacity(!setOpacity)
    }

    return <Cont>
        {opacity == 0 ?
        <Button onClick={HandleClick} 
        text="Click for Safety"
        routeTo=""
        />:
        <Button onClick={HandleClick}
        text="Undo" 
        routeTo=""/> }
        
        
        <Row>
            <Person1 src="/patient-mask2.svg" 
            right={right}
            />
            <Person2 src="/patient-mask1.svg"
            left={left}
            />
        </Row>
        <Meters opacity={opacity}>
            2.0M
        </Meters>
        <Arrow src="/distancing.svg" opacity={opacity}/>
    </Cont>
}

export default SD;