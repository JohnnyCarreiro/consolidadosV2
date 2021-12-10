import { ReactNode } from 'react'
import { Button } from '../Button/ButtonElements'

import { BtnWrapper, Heading, InfoColumn1, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './styles'

interface InfoSectionProps {
  children?: ReactNode
  id: string
}

export const InfoSection:React.FC<InfoSectionProps> = ({ children, id }) => {
  return (
    <InfoContainer id={id} >
      <InfoWrapper>
        <InfoRow>
          <InfoColumn1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrapper>
                <Button to='home'>Button</Button>
              </BtnWrapper>
            </TextWrapper>
          </InfoColumn1>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

