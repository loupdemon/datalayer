import Icon1 from '../../assets/images/catalogue.gif'
import Icon2 from '../../assets/images/governance.png'
import Icon3 from '../../assets/images/dictionnaire.gif'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesStyled'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
const Services = () => {
  return (
    <div>
      <ServicesContainer id="services">
        <ServicesH1>Notre Valeur Ajoutée</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} alt=''/>
            <ServicesH2>votre plateforme de Catalogue des données</ServicesH2>
            <ServicesP>Identifiez et valorisez votre patrimoine applicatif, vos tableaux de bord et la richesse </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Déployer votre gouvernance des données</ServicesH2>
            <ServicesP>Spécifiez et tracez vos traitements et le parcours de transformation de vos données.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>votre glossaire Business et techniques</ServicesH2>
            <ServicesP>Recensez vos données,partagez et collaborez pour organiser et structurer la connaissance </ServicesP>
          </ServicesCard>
          

        </ServicesWrapper>
      </ServicesContainer>
      
    </div>
  )
}

export default Services
