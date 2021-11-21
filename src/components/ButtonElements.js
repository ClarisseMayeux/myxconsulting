import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {color} from '../assets/color.js'

export const Button = styled(Link)`
    bordeer-radius: 50px;
    background: ${({primary}) => (primary ? color.successColor : color.secondColor)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? color.blackColor : color.blackColor)};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? color.whiteColor : color.whiteColor)};
    }
`