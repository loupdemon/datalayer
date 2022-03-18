//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
import React from 'react'
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  InfoBtn,
  Column2,
  ImgWrapper,
  Img
} from './InfoStyles'
const Info = ({
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  heading, 
  lightText,
  description,
  darkText,
  buttonLabel,
  img,
  alt,
  primary,
}) => {
  return (
    <div>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
               <TextWrapper>
                 <TopLine>{topLine}</TopLine>
                 <Heading lightText={lightText}>{heading}</Heading>
                 <SubTitle darkText={darkText}>{description}</SubTitle>
                </TextWrapper>
               <InfoBtn>
                  <Button 
                  primary={primary}
                  dark 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  to="contact"
                  >{buttonLabel}</Button>
               </InfoBtn>
            </Column1>
            <Column2>
            <ImgWrapper>
            <Img src={img} alt={alt}/>
            </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      
    </div>
  )
}

export default Info
