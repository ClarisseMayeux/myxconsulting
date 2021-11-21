import React from 'react'
import {Button} from '../ButtonElements';
import { InfoWrapper, InfoContainer, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Column2, Img } from './InfoElements';

const InfoSection = ( props ) => {
    const {id,
        lightBg,
        lightText,
        lightTextDesc,
        topLine,
        headLine,
        description,
        buttonLabel,
        imgStart,
        alt,
        dark,
        dark2,
        img,
        primary,
        darkText} = props;
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    /*primary= {primary ? 1 : 0}
                                    dark= {dark ? 1 : 0}
                                    dark2= {dark2 ? 1 : 0}*/
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
