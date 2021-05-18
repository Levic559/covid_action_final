import Button from '../Button';
import styled from 'styled-components';

const Cont = styled.div`
    align-self: center;
    height:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    bottom: 50px;
    position:relative;
`

const Last = ({
    QuizRoute
}) => {
    return <Cont>
        <Button text="Back to Home" routeTo="../infoCenter"/>
        <Button text="Take Quiz" routeTo={QuizRoute}/>
    </Cont>
}

export default Last;