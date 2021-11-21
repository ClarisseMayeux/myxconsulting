import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    background: #0d0d0d;
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
    color: #fff;
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
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-colums: 1fr;
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
    list-styles: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`