import Last from '../comps/InfoEnd';
import ImageCompGP1 from '../comps/ImageCompGP1'
import ImageCompGP1_2 from '../comps/ImageCompGP1_2'
import ImageCompGP2 from '../comps/ImageCompGP2'
import ImageCompGP2_2 from '../comps/ImageCompGP2_2'
import ImageCompGP2_3 from '../comps/ImageCompGP2_3'
import ImageCompGP3 from '../comps/ImageCompGP3'
import ImageCompGP3_2 from '../comps/ImageCompGP3_2'
import ImageCompGP3_3 from '../comps/ImageCompGP3_3'

import styled from 'styled-components';

const Bold = styled.span`
font-weight:700;
// color:red;
`
const Br = styled.div`

// color:red;
`

export const info = {
    one: {
        head:"1.Indoor & outdoor gatherings",
        text: <sapn>No indoor social gatherings of any size at your residence with anyone other than your household .For example: <Bold>Do not invite friends or extended family </Bold>inside your residence or vacation accommodationand  host a party or event inside your house.</sapn>,
        component:<ImageCompGP1/>,
        display:"none",
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",

    },
    two: {
        head:"1.Indoor & outdoor gatherings",
        text: <span><Bold>Up to 10 people</Bold> can gather outdoors. For example: Up to 10 people can gather at a park,  beach and backyard of a residence.Do not gather with several groups of new people.Continue to use COVID-19 layers of protection and maintain physical distancing. Patios and outdoor areas at restaurants, pubs and bars are not included.</span>,
        component:<ImageCompGP1_2/>,
        display:"none",
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",

    },
    
    three: {
        head:"2. Mask requirements in public indoor settings",
        text:<span> Subject to a $230 violation ticket if you: <Br> 1.<Bold> Do not wear a mask in an indoor public setting</Bold>, unless you are exempt.</Br></span> ,
        component:<ImageCompGP2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",

    },
    four: {
        head:"2. Mask requirements in public indoor settings",
        text:<span> Subject to a $230 violation ticket if you: 2.<Bold>Refuse to comply with the direction of an enforcement officer</Bold>.</span>,
        component:<ImageCompGP2_2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",

    },
    five: {
        head:"2. Mask requirements in public indoor settings",
        text: <span>Subject to a $230 violation ticket if you: 3.<Bold>Engage in abusive or belligerent behaviour in relation to the face coverings order.</Bold></span>,
        component:<ImageCompGP2_3/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",

    },
    six: {
        head:"3. Restrictions on travel between regions of the province",
        text: <span>Travel into and out of the regions for<Bold> non-essential reasons is not allowed and is now prohibited by law</Bold>. The regions are:<Bold>1.Lower Mainland and Fraser Valley </Bold>(Fraser Health and Vancouver Coastal Health)</span>,
        component:<ImageCompGP3/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    seven: {
        head:"3. Restrictions on travel between regions of the province",
        text: <span>2.<Bold>Northern/Interior </Bold>(Northern Health and Interior Health, including Bella Coola Valley, the Central Coast and Hop) Residents from the Hope area can travel to Chilliwack for essential goods and supplies.</span>,
        component:<ImageCompGP3_2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    eight: {
        head:"3. Restrictions on travel between regions of the province",
        text: <span>2.<Bold>Northern/Interior </Bold> (Northern Health and Interior Health, including Bella Coola Valley, the Central Coast and Hope) Residents from the Bella Coola Valley and Central Coast area can travel to Port Hardy for essential goods and supplies.</span>,
        component:<ImageCompGP3_2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    nine: {
        head:"3. Restrictions on travel between regions of the province",
        text: <span>Travel into and out of the regions for non-essential reasons is not allowed and is now prohibited by law. The regions are:<Bold>3.Vancouver Island</Bold> (Vancouver Island Health)</span>,
        component:<ImageCompGP3_3/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    ten: {
        head:"End of Section",
        text:"",
        component:<Last QuizRoute="../GQ3" />
    }



}