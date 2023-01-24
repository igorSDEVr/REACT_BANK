import { useEffect, useState } from 'react';
import * as C from './styled';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

type Props = {
  toggle: () => void;
};

export const Navbar = ({ toggle }: Props) => {

  const [scrollNav, setScrollNav] = useState(false);

  function changeNav() {
    if(window.screenY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  function toggleHome() {
    scroll.scrollToTop()
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  return (
    <IconContext.Provider value={{color: '#FFF'}}>
    <C.Nav scrollNav={scrollNav}>
      <C.NavbarContainer>
        <C.NavLogo to='/' onClick={toggleHome}>Dolla</C.NavLogo>
        <C.MobileIcon onClick={toggle}>
          <FaBars />
        </C.MobileIcon>
        <C.NavMenu> 
          <C.NavItem>
            <C.NavLinks
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Sobre Nós
            </C.NavLinks>
          </C.NavItem>
          <C.NavItem>
            <C.NavLinks
              to='discover'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Discover
            </C.NavLinks>
          </C.NavItem>
          <C.NavItem>
            <C.NavLinks
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Serviços
            </C.NavLinks>
          </C.NavItem>
          <C.NavItem>
            <C.NavLinks
              to='signup'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Cadastre-se
            </C.NavLinks>
          </C.NavItem>
        </C.NavMenu>
        <C.NavBtn>
        </C.NavBtn>
      </C.NavbarContainer>
    </C.Nav>
    </IconContext.Provider>
  );
};