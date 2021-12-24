import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import Logo from "../../assets/images/myx.png"
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img} from './NavbarElements';

const Navbar = ({toggle}) => {
    
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav =()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'><Img src={Logo} alt='logo'/></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="aPropos" className='active'>A propos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="creations">Créations</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="blog">Blog</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
