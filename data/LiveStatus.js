import LiveStatusBC from '../comps/LiveStatusBC'
import LiveStatusCA from '../comps/LiveStatusCA'
import LiveStatusON from '../comps/LiveStatusON'
import LiveStatusAB from '../comps/LiveStatusAB'
import LiveStatusQC from '../comps/LiveStatusQC'
import World from '../comps/WorldStatus'
import Last from '../comps/InfoEnd';
import styled from 'styled-components';

const Cite = styled.div`
font-size:10px;
// color:red;
`
const Bold = styled.span`
font-weight:700;
// color:red;
`

export const info = {
    zero: {
        head:"",
        text: "",
        component: <World />,
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },

    one: {
        head:"Covid-19 Live-Status : ",
        text: <span><Bold>The whole territories of Canada</Bold> <Cite>Canada, P. (2021). Coronavirus disease (COVID-19): Outbreak update - Canada.ca.(18 of May).</Cite></span>,
        component:<LiveStatusCA/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",

    },
    two: {
        head:"Covid-19 Live-Status",
        text: <span><Bold>British Columnbria</Bold> <Cite>Canada, P. (2021). Coronavirus disease (COVID-19): Outbreak update - Canada.ca.(18 of May).</Cite></span>,
        component:<LiveStatusBC/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",

    },
    three: {
        head:"Covid-19 Live-Status",
        text:<span><Bold>Ontario</Bold> <Cite>Canada, P. (2021). Coronavirus disease (COVID-19): Outbreak update - Canada.ca.(18 of May).</Cite></span>,
        component:<LiveStatusON/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#FF7A00",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",

    },
    four: {
        head:"Covid-19 Live-Status",
        text:<span><Bold>Quebec</Bold> <Cite>Canada, P. (2021). Coronavirus disease (COVID-19): Outbreak update - Canada.ca.(18 of May).</Cite></span>,
        component:<LiveStatusQC/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#FF7A00",
        bgcolor6:"#9A9999",

    },
    five: {
        head:"Covid-19 Live-Status",
        text:<span><Bold>Alberta</Bold> <Cite>Canada, P. (2021). Coronavirus disease (COVID-19): Outbreak update - Canada.ca.(18 of May).</Cite></span>,
        component:<LiveStatusAB/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#FF7A00",

    },
    six: {
        head:"End of Section",
        text:"",
        component:<Last QuizRoute="../dashboard" />
    }
}