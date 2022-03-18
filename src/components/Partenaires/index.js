import Icon1 from '../../assets/images/sem.gif'
import Icon2 from '../../assets/images/data.gif'
import Icon3 from '../../assets/images/info.gif'
import Icon4 from '../../assets/images/talend.gif'
import Icon5 from '../../assets/images/ataccama.gif'
import Icon6 from '../../assets/images/collibra.gif'
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
  PartenairesContainer,
  PartenairesH1,
  PartenairesWrapper,
  PartenairesCard,
  PartenairesIcon,
  PartenairesH2,
  PartenairesP
} from './PartenairesStyled'

const Partenaires = () => {
  return (
    <div>
      <PartenairesContainer id="partenaires">
        <PartenairesH1>Nos Partenaires</PartenairesH1>
        <PartenairesWrapper>
          <PartenairesCard>
            <PartenairesIcon src={Icon1} alt=''/>
            <PartenairesH2>Semarchy</PartenairesH2>
            <PartenairesP></PartenairesP>
          </PartenairesCard>
          <PartenairesCard>
            <PartenairesIcon src={Icon2}/>
            <PartenairesH2>Informatica</PartenairesH2>
            <PartenairesP></PartenairesP>
          </PartenairesCard>
          <PartenairesCard>
            <PartenairesIcon src={Icon3}/>
            <PartenairesH2>Data Galaxy</PartenairesH2>
            <PartenairesP></PartenairesP>
          </PartenairesCard>
          <PartenairesCard>
            <PartenairesIcon src={Icon4}/>
            <PartenairesH2>Talend</PartenairesH2>
            <PartenairesP></PartenairesP>
          </PartenairesCard>
          <PartenairesCard>
            <PartenairesIcon src={Icon5}/>
            <PartenairesH2>Atacomia</PartenairesH2>
            <PartenairesP></PartenairesP>
          </PartenairesCard>
          <PartenairesCard>
            <PartenairesIcon src={Icon6}/>
            <PartenairesH2>Collibra</PartenairesH2>
            <PartenairesP></PartenairesP>
          </PartenairesCard>
        </PartenairesWrapper>
      </PartenairesContainer>
      
    </div>
  )
}

export default Partenaires
