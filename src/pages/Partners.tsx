import PartnerTier from '../components/PartnerTier'
import PartnerSection from '../components/PartnerSection'
import Partner from '../components/Partner'

const Partners = () => {
  return (
    <>
      <PartnerTier opacity={70} partnerTier='PLATINE'/>
      <PartnerSection partnersPerRow={4}>
        <Partner name="Pratt & Whitney" image="src\assets\partners\PW-French-Logo_rgb-black.png" website="https://www.prattwhitney.com/" />
        <Partner name="AEETS" image="src\assets\partners\Logo-AEETS.png" website="https://www.aeets.com/" />
        <Partner name="ÉTS" image="src\assets\partners\Logo_ETS_SansTypo_FR.webp" website="https://www.etsmtl.ca/" />
      </PartnerSection>
      <PartnerTier opacity={60} partnerTier='OR'/>
      <PartnerSection partnersPerRow={4}>
        <Partner name="Hakko USA" image="src\assets\partners\Hakko.webp" website="https://hakkousa.com/" />
        <Partner name="Service à la Philantropie ÉTS" image="src\assets\partners\philantropie.png" website="https://diplomesphilanthropie.etsmtl.ca/" />
        <Partner name="Altium" image="src\assets\partners\altium.webp" website="https://www.altium.com/" />
      </PartnerSection>
      <PartnerTier opacity={50} partnerTier='ARGENT'/>
      <PartnerSection partnersPerRow={4}>
        <Partner name="RMUS" image="src\assets\partners\rmus.webp" website="https://www.rmus.com/" />
        <Partner name="Autodesk" image="src\assets\partners\autodesk.png" website="https://www.autodesk.com/" />
        <Partner name="MAD Components" image="src\assets\partners\mad.png" website="https://mad-motor.com/" />
      </PartnerSection>
      <PartnerTier opacity={40} partnerTier='BRONZE'/>
      <PartnerSection partnersPerRow={4}>
        <Partner name="eurada comptabilité et conseil" image="src\assets\partners\eurada.jpg" website="" />
        <Partner name="Centre de géomatique du Québec" image="src\assets\partners\Logo_carre_transparent_CGQ.png" website="https://www.cgq.qc.ca/" />
        <Partner name="ARA Robotique" image="src\assets\partners\ARA.webp" website="https://www.ara-uas.com/" />
        <Partner name="Rockwest Composites" image="src\assets\partners\rockwest.png" website="https://www.rockwestcomposites.com/" />
        <Partner name="T-Motor" image="src\assets\partners\tmotor.webp" website="https://uav-en.tmotor.com/" />
        <Partner name="CNC Madness" image="src\assets\partners\CNC-Madness-Logo.svg" website="https://cncmadness.com/" />
      </PartnerSection>
    </>
  )
}

export default Partners