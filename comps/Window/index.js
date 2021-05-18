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

const Img1 = styled.img`
    width: 200px;
    height:auto;
    margin-bottom: 30px;
`
const Img2 = styled.img`
    width: 200px;
    height:auto;
    margin-bottom: 30px;
`

const Window = () => {
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

        {opacity == 0 ?
        <Img1 src="/window-closed.svg"/>:
        <Img2 src="/window-open.svg"/>}
    </Cont>
}

export default Window;