import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'
import {color} from '../../assets/color.js'

export const SidebarContainer = styled.aside`
    background: ${color.primaryColor};
    display: grid;
    position: fixed;
    justify-content: space-between;
    height: 100%;
    z-index: 999;
    width: 100%;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${color.blackColor};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${color.blackColor};
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 20px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(6, 10px);
    }
`

export const SidebarLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${color.blackColor};
    cursor: pointer;

    &:hover {
        color: ${color.secondColor};
        transition: 0.2s ease-in-out;
    }
`