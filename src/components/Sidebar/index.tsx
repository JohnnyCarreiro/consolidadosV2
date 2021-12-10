import React, { ReactNode } from 'react'
import Link from 'next/link'

import { CloseIcon, Icon, SidebarBtnLink, SidebarBtnWrapper, SidebarContainer, SidebarItem, SidebarLink, SidebarMenu, SidebarWrapper } from './styles'

interface SidebarProps {
  children?: ReactNode
  isOpen?: boolean
}

export const Sidebar:React.FC<SidebarProps> = ({ children, isOpen = false }) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon>
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
