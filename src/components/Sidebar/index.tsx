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
          <SidebarItem className={'active'}>
            <SidebarLink>About</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink>Discover</SidebarLink>
          </SidebarItem><SidebarItem>
            <SidebarLink>Services</SidebarLink>
          </SidebarItem><SidebarItem>
            <SidebarLink>Sign Up</SidebarLink>
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
