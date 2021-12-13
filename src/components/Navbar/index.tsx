import { ReactNode } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLink, NavBtn, NavBtnLink } from './styles'

interface NavbarProps {
  children?: ReactNode
  toggle: () => void
}

function Navbar({ children, toggle }: NavbarProps) {
  return (
    <>
      <Nav>
        <NavContainer>
          <Link prefetch href='/' passHref >
            <NavLogo>ConsoliDados</NavLogo>
          </Link>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLink
                to='/about'
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                About
              </NavLink>
              <NavLink
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Discover
              </NavLink>
              <NavLink
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Services
              </NavLink>
              <NavLink
                to='signup'
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Sign Up
              </NavLink>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <Link prefetch href='/signin' passHref >
              <NavBtnLink>Sing In</NavBtnLink>
            </Link>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
