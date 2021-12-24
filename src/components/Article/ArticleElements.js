import styled from 'styled-components'
import {color} from '../../assets/color.js'

export const InfoContainer = styled.div`
    background: ${color.whiteColor};
    border: solid;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 100px;
    margin-right: 100px;
    
    @media screen and (max-width: 768px){
        margin-left: 10px;
        margin-right: 10px;
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'line2 line1'` : `'line1 line2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'line2' 'line1'` : `'line2 line2' 'line1 line1'`)};
    }
`;

export const Line1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: line1;
`;

export const Line2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: line2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-right: 10px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 38px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? color.blackColor : color.primaryColor)};

    @media screen and (max-width: 950px){
        font-size: 26px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? color.primaryColor : color.blackColor)};
    @media screen and (max-width: 950px){
        height: 50%;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width: 768px){
        width: 50%;
    }
`;