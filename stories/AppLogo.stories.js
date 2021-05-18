import React from 'react';
import BirdLogo from '../comps/BirdLogo/index.js'
export default {
 title:"Example/BirdLogo",
 component: <BirdLogo/>
}


export const MyLogocombine = () => <BirdLogo/>
export const MyLogoTextOnly = () => <BirdLogo display="none"/>
export const MyLogoOnly = () => <BirdLogo Fontdisplay="none"/>