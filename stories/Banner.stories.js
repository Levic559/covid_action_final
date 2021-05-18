import React from 'react';
import Banner from '../comps/Banner/'

export default {
    title: "Example/Banner",
    component: <Banner />
}

export const DefaultBanner = () => <Banner />

export const BannerWithText = () => <Banner text="Vaccine Info" />