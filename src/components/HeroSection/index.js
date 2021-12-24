import React, { useState } from 'react';
import Video from '../../assets/videos/video_marketing_digital.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Gagnez en visibilité</HeroH1>
                {/* <HeroP>
                    Nous contacter c'est gagner plus de 70% d'efficacité sur votre projet.
                </HeroP> */}
                <HeroBtnWrapper>
                    <Button 
                    to='/contact' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='false'>
                    Nous contacter {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;