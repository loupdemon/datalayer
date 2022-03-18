import React/*, {useState} */from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne, homeObjFoor } from '../components/Info/Data';
import Offres from "../components/Offres";
import Services from "../components/Services";
import Partenaires from "../components/Partenaires";
import Ressources from "../components/Ressources";

//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
const Home = () => {
  /*const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };*/
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info {...homeObjOne}/>
      <Offres/>
      <Services/>
      <Ressources/>
      <Partenaires/>
      <Info {...homeObjFoor}/>
      
    </div>
  )
};

export default Home;
