
import {animateScroll as scroll} from 'react-scroll'
//import { Link } from 'react-router'
import {/*FaFacebook, FaInstagram, FaTwitter,*/ FaLinkedin} from 'react-icons/fa'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  Copyright,
  Author,
  SocialIconLink,
  FooterLinkExt,

} from './FooterStyles'

const Footer = () => {

  const toogleTop = () => {
    scroll.scrollToTop();
  }

 

  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>À propos</FooterLinkTitle>
                  <FooterLinkExt href="https://drive.google.com/file/d/1AR_sLcUpufYn8hUGCms74qdeddJVVExD/view?usp=sharing" target="_blank" rel="noreferrer">Brochure</FooterLinkExt>
                  <FooterLinkExt href="https://drive.google.com/file/d/1smRg38BxqkgvlHdRPTUqiJDMGbB2mA5F/view?usp=sharing" target="_blank" rel="noreferrer">Fac?</FooterLinkExt>
                  <FooterLink to='mentions'>Mentions légales</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Coordonnées</FooterLinkTitle>
                  <FooterLink to='contact'>Contact</FooterLink>
                  <FooterLinkExt href="https://goo.gl/maps/urun3JVJ9tX6c96B7" target="_blank" rel="noreferrer">Siège </FooterLinkExt>
                  <FooterLink to='signin'></FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle> Videos</FooterLinkTitle>
                  <FooterLink to='spot'>Presentation</FooterLink>
                  <FooterLink to='signin'>Témoignages</FooterLink>
              </FooterLinkItems>
              
              <FooterLinkItems>
                <FooterLinkTitle> Réseaux sociaux</FooterLinkTitle>
             
                  <SocialIconLink href="https://www.linkedin.com/company/layer-data/" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>

              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
            <SocialLogo to="/" onClick={toogleTop}>Layer Data</SocialLogo>
                <Copyright>LDC - &copy; {new Date().getFullYear()}  Tous droits resevés </Copyright>
                <Author  href="https://www.linkedin.com/in/azzoug-aghiles/" target="_blank" rel="noreferrer">Conception site @A.A</Author>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </div>
  )
}

export default Footer
