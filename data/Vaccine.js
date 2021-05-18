import ImageCompV1 from '../comps/ImageCompV1';
import ImageCompV2 from '../comps/ImageCompV2';
import Antib from '../comps/Antibiotic';
import Lab from '../comps/Lab';
import Last from '../comps/InfoEnd';
import styled from 'styled-components';

const Bold = styled.span`
font-weight:700;
// color:red;
`

export const info = {
    one: {
        head:"1. Is there a vaccine for COVID-19?",
        text: <span>Yes. There are three COVID-19 vaccines for which certain national regulatory authorities have authorized the use. None have yet received WHO EUL/PQ authorization but we expect an assessment on the Pfizer vaccine by the end of December and for some other candidates soon thereafter.</span>,
        component:<ImageCompV1/>,
        display:"none",
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999"
    },
    two: {
        head:"2. What should I do if I have COVID-19 symptoms?",
        text:<span>If you have any symptoms suggestive of COVID-19, call your health care provider or COVID-19 hotline for instructions and find out when and where to<Bold> get a test, stay at home for 14 days away from others and monitor your health</Bold> .</span>,
        component:<ImageCompV2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999"
    },
    three: {
        head:"3. Are antibiotics effective in preventing or treating COVID-19?",
        text: <span>Antibiotics do not work against viruses; they only work on bacterial infections. <Bold>COVID-19</Bold> is caused by a<Bold> virus</Bold> so <Bold>antibiotics do not work</Bold>.</span>,
        component:<Antib />,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",
        bgcolor4:"#9A9999"
    },
    four: {
        head:"4.What test should I get to see if I have COVID-19?",
        text: <span>A Polymerase chain reaction <Bold>(PCR) </Bold>is one of the most commonly used molecular test. Samples are <Bold> collected from the nose and/or throat </Bold> with a swab.</span>,
        component:<Lab/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#FF7A00"
    },
    five: {
        head: "End of Section",
        text:"",
        component:<Last QuizRoute="../GQ2"/>
    }
}