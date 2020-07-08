import React from 'react';
import MainBanner from '../home-components/MainBanner'
import DarkBanner from '../home-components/DarkBanner'
import ThreeBoxes from '../home-components/ThreeBoxes'
import CardContentRight from '../home-components/CardContentRight';
import ThreeClearBoxes from '../home-components/ThreeClearBoxes';
import DarkBannerList from '../home-components/DarkBannerList';
import FormAndPhoto from '../home-components/FormAndPhoto';
import Timeline from '../home-components/Timeline';

const Home = () => {
    return (
        <div>
            <MainBanner/>
            <DarkBanner/>
            <ThreeBoxes/>
            <Timeline/>
            <CardContentRight/>
            <ThreeClearBoxes/>
            <DarkBannerList/>
            <FormAndPhoto/>
        </div>
    );
};

export default Home;