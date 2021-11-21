import styled from 'styled-components'
import {color} from '../../assets/color.js'

export const FooterContainer = styled.footer`
    background-color: ${color.blackColor};
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;


    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`
export const FooterSentence = styled.h4`
    color: ${color.whiteColor};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
`