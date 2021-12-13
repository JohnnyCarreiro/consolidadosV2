import { ReactNode } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from './styles'

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
            <NavItem>
              <Link href='#' passHref >
                <NavLink>About</NavLink>
              </Link>
              <Link href='#' passHref >
                <NavLink>Discover</NavLink>
              </Link>
              <Link href='#' passHref >
                <NavLink>Services</NavLink>
              </Link>
              <Link href='#' passHref >
                <NavLink>Sign Up</NavLink>
              </Link>
            </NavItem>
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
