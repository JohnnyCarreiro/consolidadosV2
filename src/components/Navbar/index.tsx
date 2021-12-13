import { ReactNode } from 'react'
import Link from 'next/link'

import { FaBars } from 'react-icons/fa'
import { navLinks } from './links'
import { NavLink } from './NavLink'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavBtn, NavBtnLink } from './styles'

interface NavbarProps {
  children?: ReactNode
  toggle: () => void
}

function Navbar({ children, toggle }: NavbarProps) {
  return (
    <>
      <Nav>
        <NavContainer>
          <Link href='/' passHref >
            <NavLogo>ConsoliDados</NavLogo>
          </Link>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {
              navLinks.map((link) => (
                <NavLink key={link.id} name={link.name} id={link.id} />
              ))
            }
          </NavMenu>
          <NavBtn>
            <Link href='/signin' passHref >
              <NavBtnLink>Sing In</NavBtnLink>
            </Link>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
