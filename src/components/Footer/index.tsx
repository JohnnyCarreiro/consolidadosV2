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
              <FooterLink>How it works</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of service</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Services</FooterLinksTitle>
              <FooterLink>How it works</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          {/* Second Column */}
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink>How it works</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of service</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Services</FooterLinksTitle>
              <FooterLink>How it works</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
