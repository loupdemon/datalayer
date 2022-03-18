import React, { useState } from 'react'
import video from '../../assets/video/spot.mp4'
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtn,
  ArrowForward,
  ArrowRight
} from './SpotStyles'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
const Spot = () => {
  const [hover, setHover] = useState(false);

  const onHover = ()=> setHover(!hover);
  return (
    <div>
      <HeroContainer id="spot">
        
        <HeroBg>
          <VideoBg src={video} autoPlay playsInline loop/>
        </HeroBg>
        <HeroContent>
          
          <HeroBtn>
            <Button primary dark to="/" onMouseEnter={onHover} onMouseLeave={onHover}>
              Retour à l'acccueil{hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtn>
        </HeroContent>

      </HeroContainer>
      
    </div>
  )
}

export default Spot
