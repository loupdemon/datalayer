import styled from 'styled-components'
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
export const HeroContainer = styled.section`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
z-index: 1;

&::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient( 
  100deg, 
  rgba(0,0,0,0.2) 0%, 
  rgba(0,0,0,0.6) 100%),
  linear-gradient(
  100deg, 
  rgba(0,0,0,0.2) 0%, 
  transparent 100%
  );
  z-index: 2;
   
}
`;
export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;
export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
/* background: #232a34; */
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1400px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

`;
export const HeroTitle = styled.h1`
font-size: 4.8rem;
text-align: center;
color: #fff;

@media only screen and (max-width: 768px){
  font-size: 4rem;
}

@media only screen and (max-width: 480px){
  font-size: 3rem;
}

`;
export const HeroText = styled.h2`
margin-top: 4px;
color: #fff;
font-size: 2.4rem;
text-align: center;
max-width: 600px;

@media only screen and (max-width: 768px){
  font-size: 2rem;
}

@media only screen and (max-width: 480px){
  font-size: 1.8rem;
}
`;
export const HeroBtn = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;
export const HeroIcon = styled.img`
height: 5rem;
width: 5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: 800;
transition: all .3s ease;

&:hover{
  transform: scale(1.1) translateX(.5rem) translateY(.3rem);
}
`;