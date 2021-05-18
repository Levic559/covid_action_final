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

const Liquid = styled.img`
    width:100px;
    height:300px;
    background-color:green;
    position:relative;
    top:${props=>props.top}px;
    transition: top 1s;
`

const Tube = styled.img`
    width:227px;
    height:210px;
    position:relative;
    bottom:130px;
`

const Lab = () => {
const [fluidstate, SetFluid] = useState(false)
var top = 200

if (fluidstate == true)
{
    top = 60
}

const HandleEvent = () => {
    SetFluid(!fluidstate)
}
    return <Cont>
        { top == 200 ?
        <Button 
            text="Fill Tube"
            onClick={HandleEvent}
            routeTo=""
        />:
        <Button 
            text="Empty Tube"
            onClick={HandleEvent}
            routeTo=""
        />
        }

        <Liquid src="/fluid.svg" top={top} />
        <Tube src="/testtube.svg"/>
        
    </Cont>
}

export default Lab;