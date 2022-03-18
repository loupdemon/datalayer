
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav? '#1fa8ff' : 'transparent')};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width: 100%;
top: 0;
z-index: 10;

@media only screen and (max-width: 960px){
 transition: 0.8s all ease;
}
`;
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1400px;

@media only screen and (max-width: 1200px){
 max-width: 1100px;
}
`;
export const NavLogo = styled(LinkR)`
text-decoration: none;
color: #fff;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: 800;
font-size: 2.6rem;
transition: all .3s ease;

&:hover{
  transform: scale(1.1) translateX(.5rem) translateY(.3rem);
  color: #2962f2;
}
`;

export const NavIcon = styled.div`
 display: none;


 @media only screen and (max-width: 1000px){
  display: block;
  font-size: 3rem;
  color: #2962f2;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  
 }
`;

export const NavWrapper = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 1000px){
  display: flex;
  flex-direction: column;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media only screen and (max-width: 1000px){
  width: 100%;
  height: 100vh;
  background: #1fa8ff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: ${({click}) => click ? '0': '-100%'};
  transition: all .5s ease;
}
`;
export const NavItem = styled.li`
height: 80px;
`;
export const NavLink = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.6rem;
height: 100%;
cursor: pointer;
transition: all .3s ease;

&:active{
  border-bottom: 3px solid #1fa8ff;
}
&:hover,
&:active{
  color: #2962f2;
}

@media only screen and (max-width: 1000px){
  font-size: 2.5rem;

  &:hover,
  &:active{
  transform: scale(1.06);
  border-bottom: 3px solid #2962f2;
  color : #000
  
  }
}

@media only screen and (max-width: 768px){
  font-size: 1.6rem;
}
`;

export const NavBtn = styled.div`
display: flex;
align-items: center;
margin-left: 50px;

@media only screen and (max-width: 1000px){
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-top: 50px;
}
`;
export const NavBtnLink = styled(LinkR)`
text-decoration: none;
border-radius: 50px;
background: #2962f2;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
  background: #fff;
  color: #010606;
}
`;