import React, { ReactNode } from 'react'

import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLinksWrapper,
  FooterWrapper
} from './styles'

interface FooterProps {
  children?: ReactNode
}

function Footer({ children }: FooterProps) {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                How it works
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Testimonial
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Careers
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Investors
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Terms of service
              </FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Contact
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Address
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Support
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Destination
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Sporsorships
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          {/* Second Column */}
          <FooterLinksWrapper>
          <FooterLinksItems>
              <FooterLinksTitle>Social</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Youtube
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Facebook
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Instagram
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Linked In
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Twitter
              </FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Services</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 1
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 2
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 3
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 4
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Terms of service with some long text, but not long enaought;
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
