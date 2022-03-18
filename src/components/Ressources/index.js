import Icon1 from '../../assets/images/rachid.png'
import Icon2 from '../../assets/images/florient.png'
import Icon3 from '../../assets/images/pascal.png'
import {/*FaFacebook, FaInstagram, FaTwitter,*/ FaLinkedin} from 'react-icons/fa'
import {
    RessourcesContainer,
    RessourcesH1,
    RessourcesWrapper,
    RessourcesCard,
    RessourcesIcon,
    RessourcesH2,
    RessourcesP,
    SocialIconLink
} from './RessourcesStyled'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
const Ressources = () => {
  return (
    <div>
      <RessourcesContainer id="ressources">
        <RessourcesH1>Nos Experts</RessourcesH1>
        <RessourcesWrapper>
          <RessourcesCard>
            <RessourcesIcon src={Icon1} alt=''/>
            <RessourcesH2>Rachid TIGHREMT</RessourcesH2>
            <RessourcesP>CEO, Founder of Layer Data, Data Scientist</RessourcesP>
                  <SocialIconLink href="https://www.linkedin.com/in/rtighremt/" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
          </RessourcesCard>
          <RessourcesCard>
            <RessourcesIcon src={Icon2}/>
            <RessourcesH2>Florian Blaise</RessourcesH2>
            <RessourcesP>Sales Manager at Layer Data Consulting</RessourcesP>
                  <SocialIconLink href="https://www.linkedin.com/in/florian-blaise-layer-data/" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
          </RessourcesCard>
          <RessourcesCard>
            <RessourcesIcon src={Icon3}/>
            <RessourcesH2>Rayan Haroun</RessourcesH2>
            <RessourcesP>Data Ingénieur chez Layer Data Consulting</RessourcesP>
                  <SocialIconLink href="https://www.linkedin.com/in/rayane-haroun-72587b203/" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
          </RessourcesCard>
          

        </RessourcesWrapper>
      </RessourcesContainer>
      
    </div>
  )
}

export default Ressources
