import styled from 'styled-components'
import {Link} from 'react-router-dom'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
export const Container = styled.div`

position: relative;

bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
  100deg,
  rgba(98, 182,228,1) 0%,
  rgba(31,168,255,255) 100%
);
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (max-width:400px) {
  height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 3.2rem;
margin-top: 3.2rem;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 3.2rem;

@media only screen and (max-width: 480px) {
  margin-left: 1.6rem;
  margin-top: .8rem;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (max-width:480px){
  padding: 18px;
}
`;

export const Form = styled.form`
background: #4e525d;
max-width: 40rem;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 15px 20px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media only screen and (max-width: 400px) {
  padding: 32px;
  height: 100%;
}
`;

export const FormH1 = styled.h1`
margin-bottom: .5rem;
color: #fff;
font-size: 1.5rem;
font-weight: 400;
text-align: center;
`;

export const FormLabel = styled.label`
margin-bottom: .8rem;
font-size: 1.4rem;
color: #fff;
`;

export const FormLabel1 = styled.label`
display: none;
position: absolute;
top: 4px;
color: #ff4d4d;
right: 0;
transform-origin: 50% 50%;
`;

export const FormInput = styled.input`
padding: 16px;
margin-bottom: 3.2rem;
border: none;
border-radius: .4rem;
`;

export const FormInputmessage = styled.input`
padding: 30px;
margin-bottom: 3.2rem;
border: none;
border-radius: .4rem;
`;

export const FormButton = styled.button`
background: #1fa8ff;
padding: 1.6rem 0;
border: none;
outline: none;
color: #fff;
font-size: 2rem;
cursor: pointer;
border-radius: 4px;
`;

export const Text = styled.span`
text-align: center;
margin-top: 2.4rem;
color: #fff;
font-size: 1.4rem;
`;