import React, { ReactNode } from 'react'
import Link from 'next/link'

import { CloseIcon, Icon, SidebarBtnLink, SidebarBtnWrapper, SidebarContainer, SidebarItem, SidebarLink, SidebarMenu, SidebarWrapper } from './styles'

interface SidebarProps {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
}

export const Sidebar:React.FC<SidebarProps> = ({ children, isOpen = false, toggle }) => {

  //SidebarLink use "onClick={toggle}" or a new handle function to triger toggling and enshure we can activate a new route
  //For de second behavior we shoulde the handle route function into SidebarItem component
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle} >
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem onClick={toggle} >
            <SidebarLink
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
              onClick={() => setTimeout(() => toggle(), 350) }
              delay={250}
            >
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem onClick={toggle} >
            <SidebarLink
              to='discover'
              smooth={true}
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
              onClick={() => setTimeout(() => toggle(), 350) }
              delay={250}
            >
              Discover
            </SidebarLink>
          </SidebarItem>
          <SidebarItem onClick={toggle} >
            <SidebarLink
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
              onClick={() => setTimeout(() => toggle(), 350) }
              delay={250}
            >
              Services
            </SidebarLink>
          </SidebarItem>
          <SidebarItem onClick={toggle} >
            <SidebarLink
              to='signup'
              smooth={true}
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
              onClick={() => setTimeout(() => toggle(), 350) }
              delay={250}
            >
              Sign Up
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <Link prefetch href='/signin' passHref >
            <SidebarBtnLink>Sign In</SidebarBtnLink>
          </Link>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
