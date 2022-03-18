import React, {useState, useEffect} from 'react';
import {BiMenuAltRight, BiX} from 'react-icons/bi'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavWrapper,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from './NavbarStyles'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = ()=> setClick(!click);
  const closeMenu = ()=> setClick(false);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=>{
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toogleTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div>
      <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toogleTop}> Layer Data</NavLogo>
          <NavIcon onClick={handleClick}>
            {click ? <BiX/> : <BiMenuAltRight/> }
          </NavIcon>
          
            <NavMenu onClick={handleClick} click={click}>
              <NavWrapper>
                <NavItem>
                  <NavLink 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  
                  onClick={closeMenu} to="about">Notre Vision</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="offres">Offres</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-90}
                   onClick={closeMenu} to="partenaires">Partenaires</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="ressources">Experts</NavLink>
                </NavItem>
                
              </NavWrapper>
                <NavBtn>
                  <NavBtnLink onClick={closeMenu} to="contact">Nous contacter</NavBtnLink>
                </NavBtn>
            </NavMenu>
    
        
        </NavContainer>
      </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
