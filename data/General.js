import ImageCompG1 from'../comps/ImageCompG1'
import ImageCompG5 from'../comps/ImageCompG5'
import Common from '../comps/CommonSymp';
import Sever from '../comps/SeverSymp';
import AtRisk from '../comps/AtRisk';
import Mask from '../comps/Mask';
import SD from '../comps/SocialDistancing';
import Window from '../comps/Window';
import Hands from '../comps/HandWashing';
import Cough from '../comps/Coughing';
import Last from '../comps/InfoEnd';
import styled from 'styled-components';

const Bold = styled.span`
font-weight:700;
// color:red;
`

export const info = {
    one: {
        head:"1. What is COVID-19?",
        text:<span>COVID-19 is the disease caused by a new coronavirus called <Bold>SARS-CoV-2</Bold>.  WHO first learned of this new virus on <Bold>31 December 2019</Bold>, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s Republic of China.</span>,
        component:<ImageCompG1/>,
  
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },
    two: {
        head:"2. The most common symptoms of COVID-19 are?",
        text:<span><Bold>Fever, Dry cough, and Fatigue.</Bold> </span>,
        component:<Common/>,

        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },
    three: {
        head:"3. Symptoms of severe COVID‐19 disease include:",
        text:<span><Bold>Shortness of breath</Bold>, Loss of appetite, Confusion, <Bold>Persistent pain or pressure in the chest</Bold>, <Bold>High temperature</Bold> (<Bold>aBoldove 38 °C</Bold>)."</span>,
        component:<Sever />,

        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },
    four: {
        head:"4.Who is most at risk of severe illness from COVID-19?",
        text:<span>People aged 60 years and over, and those with underlying medical problems like <Bold>high blood pressure, heart and lung problems, diabetes, obesity or cancer, are at higher risk </Bold>of developing serious illness. However,<Bold> anyone can get sick with COVID-19</Bold>.</span>,
        component:<AtRisk />,

        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#FF7A00",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },
    five: {
        head:"5. How long does it take to develop symptoms?",
        text:<span>The time from exposure to COVID-19 to the moment when symptoms begin is, on average, 5-6 days and can range <Bold>from 1-14 days.</Bold></span>,
        component:<ImageCompG5/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#FF7A00",
        bgcolor6:"#9A9999",
    },
    six: {
        head:"6.How can we protect others and ourselves if we don't know who is infected?",
        text:<span>We can start off by <Bold>wearing face masks</Bold>.</span>,
        component:<Mask />,
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#FF7A00"
    },
    seven: {
        text:<span>Practicing social distancing in public places, with a minium of <Bold>2.0 meters</Bold> between indiviauls.</span>,
        component:<SD />,
    },
    eight: {
        text:<span>Keeping public spaces <Bold>well ventilated</Bold>.</span>,
        component:<Window />
    },
    nine: {
        text:<span><Bold>Regularly washing</Bold> our hands.</span>,
        component:<Hands />
    },
    ten: {
        text:<p>And finally, <Bold>couging into a tissue or elbow </Bold>when we need to.</p>,
        component:<Cough />
    },
    eleven: {
        head:"End of Section",
        text:"",
        component:<Last QuizRoute="../GQ1" />
    }
}