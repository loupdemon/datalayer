import React, { useState } from "react";
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
  Container,
  FormWrap,
  FormContent,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormInputmessage,
  FormButton
  } from './ContactStyled'

const Contact = () => {
    //setName permet de changer la variable, useState permet l'usage ""
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  //-------------------------------------------
  const isEmail = () => {
    //let mail= document.getElementById('not_mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
    if (email.match(regex)){
      //mail.style.display ='none';
      return true;
    } else {
     // mail.style.display='block';
     // mail.style.animation ='dongle 1s';
      return false;
    }
  }

  //---------------------------------------
  //regex pour telephone non inclus //
  /*const isPhone = () => {
    let regex = /^[0-9]{,20}$/ ;
    if (phone.match(regex)){
      //mail.style.display ='none';
      return true;
    } else {
      return false;
    }
  }*/
   
  //-------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEmail() && message){
    //la fonction retour qui renvoit les composants remplis//
    //toutes les valeurs qui sont dans nos states name, company...//
      sendFeedback("template_feq1f2l", { //template ID à recuper dans mail js //
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
    console.log('error');
    }
    
  };
  /*const { register, formState: { errors } } = useState();*/
  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_zlda5gq", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
      <div>
        <Container>
          <FormWrap>
            <Icon to='/'>Layer Data</Icon>
            <FormContent>
              <Form action='#'>
                <FormH1>Veuillez bien remplir les champs avec * </FormH1>
                <FormLabel htmlFor='email'>Nom</FormLabel>
                <FormInput  type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Votre nom et prenom *"
                            value={name}
                            autoComplete="off"
                            required>
                </FormInput>
                <FormLabel htmlFor='email'>Entreprise</FormLabel>
                <FormInput  type="Email"
                            id="company"
                            name="company"
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Le nom de votre société"
                            value={company}
                            required>
                </FormInput>
                <FormLabel htmlFor='email'>Numéro de téléphone</FormLabel>
                <FormInput  type="Email"
                            id="phone"
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(+indicatif du pays si vous êtes à l'étranger)"
                            //{...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
                            value={phone}
                            required>
                </FormInput>
                <FormLabel htmlFor='email'>Email*</FormLabel>
                <FormInput  type='email'
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="L'adresse mail vers laquelle je vais vous repondre *"
                            value={email}
                            autoComplete="off"
                            required>
                </FormInput>
                <FormLabel  htmlFor='email'>Message*</FormLabel>
                <FormInputmessage  id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Votre message *"
                            value={message}
                            required>
                </FormInputmessage>
                <FormButton   type="button"
                              value="Envoyer"
                              onClick={handleSubmit}>
                  Envoyer</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
        
      </div>
    )
  };

export default Contact