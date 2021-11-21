import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>MyxConsulting</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="moi">Qui suis-je ?</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Mes services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="temoignages">Temoignages</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
