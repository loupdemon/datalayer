import styled from 'styled-components'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
export const RessourcesContainer = styled.section`
height: 60rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
@media only screen and (max-width:1000px) {
  height: 90rem;

}
@media only screen and (max-width:768px) {
  height: 130rem;

}


`;
export const RessourcesH1 = styled.h1`
font-size: 4rem;
color: #1fa8ff;
margin-bottom: 6.4rem;

@media only screen and (max-width: 480px){
  font-size: 3.2rem
}
`;
export const RessourcesWrapper = styled.div`
max-width: 1300px;
margin: 0 auto;display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-content: center;
grid-gap: 2.5rem;
padding: 0 50px;

@media only screen and (max-width:1000px) {
  grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width:768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;
export const RessourcesCard = styled.div`
background-color: #1fa8ff;
display: flex;
flex-direction: column;
text-align: center;
border-radius: 10px;
max-height: 34rem;
padding: 3.8rem;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all .5s ease;
line-height: 1.4;

&:hover{
  transform: scale(1.1);
  cursor: pointer;

  @media only screen and (max-width:768px){
    transform: scale(1.02);
  }
}

/* @media only screen and (max-width:1900px){
    max-height: 50rem;
  } */
`;

export const SocialIconLink = styled.a`
font-size: 2.4rem;
color: #fff;
transition: all .3s ease;

&:hover {
  color: #2962f2;
  transform: scale(1.05) translateX(.5rem) translateY(.5rem);
}
`;

export const RessourcesIcon = styled.img`
height: 16rem;
width: 16rem;
margin-bottom: 1rem;
margin: 0 auto;
`;
export const RessourcesH2 = styled.h2`
margin-bottom: 1rem;
font-size: 1.3rem;
color: #fff;
`;


export const RessourcesP = styled.p`
text-align: center;
font-size: 1.1rem;
color: #fff;
`;