import { ReactNode } from 'react'
import Link from 'next/link'

import { ArrowForward, ArrowRight, HeroBg, HeroBtn, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './styles'
import Video from '@/assets/hero_video.mp4'

interface HeroSectionProps {
  children?: ReactNode
}

function HeroSection({ children }: HeroSectionProps) {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          // type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Sua empresa faz negócios on-line?</HeroH1>
        <HeroP>
          Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
        </HeroP>
        <HeroBtnWrapper>
          <Link prefetch href='/signup' passHref >
            <HeroBtn>
              De volta ao negócios {hover ? <ArrowForward/> : <ArrowRight/>}
            </HeroBtn>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
