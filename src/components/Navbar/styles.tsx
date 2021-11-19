import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
// export const NavLogo2 = styled(Link)`
//   color: red;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `
// export const NavLogo3 = (props: {name: string, children: React.ReactNode}) => (<NavLogo2 href="/" passHref>{props.children}</NavLogo2>)
