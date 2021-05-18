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
    top:5px;
`

const Patient1 = styled.img`
    width:227px;
    height:auto;
`
const Patient2 = styled.img`
    width:227px;
    height:auto;
    position:relative;
    top:37px;
`
const Patient3 = styled.img`
    width:227px;
    height:auto;
`

var counter = 1
const Risk = () => {
    const [patientState, setPatient] = useState(counter)
    

    const ChangePatient = () => {
        counter++
        setPatient(counter)
        if (counter==4)
        {
            counter = 1
            setPatient(counter)
        }
        console.log(counter)
    }


    useEffect(() => {
        var interval1
        interval1 = setInterval(ChangePatient,3000);
        return () => {
            clearInterval(interval1)
        }
    }, []);

    return <Cont>
        { patientState == 1 ?
        <Patient1 src="/patient-elderly.svg"/>:
        patientState== 2 ?
        <Patient2 src="/patient-obese.svg"/>:

        <Patient3 src="/patient.svg"/>}
    </Cont>
}

export default Risk;