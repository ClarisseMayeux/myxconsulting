import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLinks, SidebarMenu} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to="moi">Qui suis-je ?</SidebarLinks>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinks to="services">Mes services</SidebarLinks>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinks to="temoignages">Temoignages</SidebarLinks>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinks to="/contact">Contact</SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
