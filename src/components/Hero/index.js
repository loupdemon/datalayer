//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import video from '../../assets/video/videohero.mp4'
// import Icon from '../../assets/images/play-video.png'
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroBtn,
  ArrowForward,
  ArrowRight
  // HeroIcon
} from './HeroStyles'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = ()=> setHover(!hover);
  return (
    <div>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg src={video} autoPlay muted playsInline loop/>
        </HeroBg>
        <HeroContent>
          <HeroTitle>Layer Data</HeroTitle>
          <HeroText>
          Pure Player Intégrateur de solutions de Catalogues de données et de MDM
          </HeroText>
          <HeroBtn>
            <Button primary dark to="spot" onMouseEnter={onHover} onMouseLeave={onHover}>
              Regarder la video {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
            {/* <HeroIcon to="About" class="glightbox"  src={Icon} alt=''/> */}
          </HeroBtn>
        </HeroContent>

      </HeroContainer>
      
    </div>
  )
}

export default Hero
