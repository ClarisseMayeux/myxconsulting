import React from 'react'
import {Button} from '../ButtonElements';
import { InfoWrapper, InfoContainer, InfoRow, Line1, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Line2, Img } from './ArticleElements';

const ArticleSection = ( props ) => {
    const {id,
        lightBg,
        lightText,
        headLine,
        description,
        buttonLabel,
        imgStart,
        alt,
        img,
        darkText,
        lien} = props;

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Line1>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Line1>
                        <Line2>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {/* <Button href="https://www.journalducm.com/dictionnaire-marketing/marketing-digital/">{buttonLabel}</Button> */}
                                    <a href={lien} target="_blank">{buttonLabel}</a>
                                </BtnWrap>
                            </TextWrapper>
                        </Line2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default ArticleSection;