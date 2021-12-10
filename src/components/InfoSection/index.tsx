import { ReactNode } from 'react'
import { Button } from '../Button/ButtonElements'

import { BtnWrapper, Column1, Column2, Heading, Img, ImgWrapper, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './styles'

interface InfoSectionProps {
  children?: ReactNode
  id: string
}

export const InfoSection:React.FC<InfoSectionProps> = ({ children, id }) => {
  return (
    <InfoContainer id={id} >
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrapper>
                <Button primary to='home'>Button</Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

