import Icon1 from '../../assets/images/governance.gif'
import Icon2 from '../../assets/images/MDM-Data.gif'
import Icon3 from '../../assets/images/data-management.gif'
import {
    OffresContainer,
    OffresH1,
    OffresWrapper,
    OffresCard,
    OffresIcon,
    OffresH2,
    OffresP
} from './OffresStyled'
//////////////////////////////////////////////////////////////////
//////////////****AUTHOR : AGHILES AZZOUG -  *////////////////////
//////////////*****JUIN - AOUT 2021 */////////////////////////////
/////////////Développement et design /////////////////////////////
/////////Propriété privé de Layer Data - Rachid Tighremt//////////
////////Tous droits reservés ... interdit tout plagiat ///////////
////////    interdit tout usage sans autorisation     ////////////
///////---------------------------------------------//////////////
//////////////////////////////////////////////////////////////////
const Offres = () => {
  return (
    <div>
      <OffresContainer id="offres">
        <OffresH1>Nos Offres</OffresH1>
        <OffresWrapper>
          <OffresCard>
            <OffresIcon src={Icon1}/>
            <OffresH2>Data Gouvernance & Catalogue </OffresH2>
            <OffresP>Conseil aux organisations Data Office et aux CDO pour la mise en place d’une stratégie de gouvernance des données aux standards des pratiques...</OffresP>
          </OffresCard>

          <OffresCard>
            <OffresIcon src={Icon2} alt=''/>
            <OffresH2>Master Data Management</OffresH2>
            <OffresP>Conseil pour la mise en place d’un référentiel des données maitre (MDM), Benchmark de solutions MDM et Accompagnement pour l’intégration du MDM...</OffresP>
          </OffresCard>
       
          <OffresCard>
            <OffresIcon src={Icon3}/>
            <OffresH2>Data Management et Qualité des données</OffresH2>
            <OffresP>Profiling des données, Conseil pour la mise en place de votre stratégie de qualité des données, Analyse, Architecture, Business Intelligence...</OffresP>
          </OffresCard>
          
          

        </OffresWrapper>
      </OffresContainer>
      
    </div>
  )
}

export default Offres
