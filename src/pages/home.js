import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'

const Home = () => {
    return (
        <>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home;
