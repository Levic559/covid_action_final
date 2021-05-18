import World from '../PieChart';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
position:relative;
bottom:240px;
height: 455px;
`

const WorldCont = styled.div`
    width: 300px;
    height: 300px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    left: 94px;
    top:47px
`

const TextCont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 316px;
    align-self:center;
`

const TextCol = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const NAcolor = styled.div`
    width: 20px;
    height: 20px;
    background-color: #ffcd00;
    border-radius:50%;
`
const SAcolor = styled.div`
    width: 20px;
    height: 20px;
    background-color: #ff6666;
    border-radius:50%;
`
const AFcolor = styled.div`
    width: 20px;
    height: 20px;
    background-color: #00b450;
    border-radius:50%;
`
const EUcolor = styled.div`
    width: 20px;
    height: 20px;
    background-color: #6766ff;
    border-radius:50%;
`
const AIcolor = styled.div`
    width: 20px;
    height: 20px;
    background-color: #e166ff;
    border-radius:50%;
`
const OCcolor = styled.div`
    width: 20px;
    height: 20px;
    background-color: grey;
    border-radius:50%;
`

const Text = styled.div`
    font-family: Roboto;
    font-size: 15px;
    color:black;
    display:flex;
    margin-left: 5px;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
    margin: 5px;
`

const Total = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 316px;
`


const WorldStatus = () =>{
    return <Cont>
        <Total>
            <h4>Worldwide Cases: 164.3 Million</h4>
        </Total>


        <WorldCont>
            <World/>
        </WorldCont>

        <TextCont>
            <TextCol>
                <Row><NAcolor/> <Text>NA - 39.2M</Text></Row>
                <Row><SAcolor/> <Text>SA - 26.2M</Text></Row>
                <Row><AFcolor/> <Text>Africa - 2.6M</Text></Row>
            </TextCol>

            <TextCol>
                <Row><EUcolor/> <Text>Europe - 26.8M</Text></Row>
                <Row><AIcolor/> <Text>Asia - 47.2M</Text></Row>
                <Row><OCcolor/> <Text>Oceania - 65,934</Text></Row>
            </TextCol>
        </TextCont>
    </Cont>
}

export default WorldStatus;