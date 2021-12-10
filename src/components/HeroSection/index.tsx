import { ReactNode } from 'react'

import { HeroBg, HeroContainer, VideoBg } from './styles'
import Video from '@/assets/hero_video.mp4'

interface HeroSectionProps {
  children: ReactNode
}

function HeroSection({ children }: HeroSectionProps) {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          // type="video/mp4"
        />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
