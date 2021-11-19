import { ReactNode } from 'react'
import Link from 'next/link'

import { Nav, NavContainer, NavLogo } from './styles'

interface NavbarProps {
  children?: ReactNode
}

function Navbar({ children }: NavbarProps) {
  return (
    <>
      <Nav>
        <NavContainer>
          <Link href='/' passHref>
            <NavLogo>dolla</NavLogo>
          </Link>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
