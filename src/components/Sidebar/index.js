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
                    <SidebarLinks to="aPropos">A propos</SidebarLinks>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinks to="services">Services</SidebarLinks>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinks to="creations">Créations</SidebarLinks>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinks to="blog">Blog</SidebarLinks>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinks to="contact">Contact</SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
