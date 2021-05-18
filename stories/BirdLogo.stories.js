import React from 'react';
import AppLogo from '../comps/AppLogo/index.js'
export default {
 title:"Example/AppLogo",
 component: <AppLogo/>
}


export const MyLogocombine = () => <AppLogo/>
export const MyLogoTextOnly = () => <AppLogo display="none"/>
export const MyLogoOnly = () => <AppLogo Fontdisplay="none"/>