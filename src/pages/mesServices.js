import React from 'react'
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'

const mesServices = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default mesServices;
