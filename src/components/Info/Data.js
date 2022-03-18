//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
export const homeObjOne ={
  id: 'about', 
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Notre Vision',
  heading: 'Avez-vous démarré votre gouvernance des données ?', 
  description: 'La réussite de votre stratégie data-centric n’est pas seulement une question d’outils ou de technologies. Il est indispensable de fédérer et mobiliser toutes vos équipes autour d’une démarche de transformation collective, afin de partager une nouvelle culture commune de vos données.',
  buttonLabel: 'En savoir plus ',
  imgStart: false,
  img: require('../../assets/images/presentation.gif').default,
  alt: 'presentation',
  dark: true,
  primary: true,
  darkText: false
};
export const homeObjTwo ={
  id: 'discover', 
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Nous découvrir',
  heading: 'MDM', 
  description: 'Les Master Data Managment ou Données de Références, sont une brique primordiale d un système d information. Elles sont réparties sur plusieurs domaines métiers.Layer Data dispose d une expertise de haut niveau dans ce segment et peut vous aider à structurer et implémenter vos projets MDM',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: require('../../assets/images/mdm.gif').default,
  alt: 'mdm',
  primary: false,
  dark: false,
  darkText: true,
};

export const homeObjThree ={
  id: 'discover', 
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  heading: 'DATA GOUVERNANCE & CATALOGUE ', 
  description: 'Quels rôles pour quels spécialistes? Me faut-il un CDO orienté Data ou Digital? Est-ce que mes ressources disposent et intègrent la culture Data? Pour répondre à ces enjeux, LDC vous aide à relier les bonnes ressources avec les bons outils techniques et organisationnels leurs permettant de réellement challenger et incarner ce qu est une entreprise Data Driven... ',
  buttonLabel: 'En savoir plus',
  imgStart: true,
  img: require('../../assets/images/metadata.gif').default,
  alt: 'mdm',
  dark: false,
  primary: false,
  darkText: true
};
export const homeObjFoor ={
  id: 'signup', 
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Contactez-nous',
  heading: 'Discutons de vos problématiques et de vos besoins.', 
  description: 'Prenez contact avec un conseiller Layer Data pour avoir plus d’informations ou souscrire à une de nos offres ! ',
  buttonLabel: 'Nous contacter',
  imgStart: false,
  img: require('../../assets/images/layer-data-consultant.gif').default,
  alt: 'benefites',
  dark: false,
  primary: true,
  darkText: true
};