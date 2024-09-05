import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

import DACC from '../assets/DACC.png'
import Monolith from '../assets/Monolith.png'
import BondBreak from '../assets/BondBreak.png'
import CFD from '../assets/CFD.png'
import CO2Sensor from '../assets/co2Sensor.png'
import SolarPanel from '../assets/solar-panel.png'
import CalciumCarbonate from '../assets/skeleton.png'

const Prototype = () => {

  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('prototypePageTitle')}</title>
        <meta name="description" content={t('prototypePageDescription')} />
      </Helmet>
      <div className='flex flex-col items-center mx-auto font-montserrat text-white font-bold mb-12'>
        <div className='text-[3rem] sm:text-[5rem] md:text-[8rem] text-center mb-4 text-carbonets-white'>
          {t('titlePrototype')}
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4'>
          <div className="m-4 space-y-8">
            <h2 className='text-[1.5rem] lg:text-[2.5rem]'>{t('subtitleDACC')}</h2>
            <img src={DACC} alt="DACC" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-light'>
              <Trans i18nKey="paragraphDACC">
                Carbon can be captured in multiple ways and creating a <span className="font-bold">DACC</span> unit is a great place to start. The unit captures carbon <span className="font-bold">just like a tree</span>, but unlike a tree which reaches a limit when it finishes growing, the DACC can continue to capture and do so at rates unforeseen by trees.
              </Trans>
            </p>
          </div>
          <img src={DACC} alt="DACC" className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] lg:max-w-[25rem] hidden md:block rounded-xl"/>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0'>
          <img src={Monolith} alt="Amine Monolith" className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] lg:max-w-[25rem] hidden md:block rounded-xl"/>
          <div className="m-4 space-y-8">
            <h2 className='text-[1.5rem] lg:text-[2.5rem]'>{t('subtitleKeyElement')}</h2>
            <img src={Monolith} alt="Amine Monolith" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-light'>
              <Trans i18nKey="paragraphKeyElement">
                The <span className="font-bold text-carbonets-green">sorbent</span>, also known as the absorbing material, is created from a high-temperature resistant honeycomb style monolith containing <span className="font-bold">CO₂</span> absorbing molecules such as <span className="font-bold text-carbonets-blue">amines</span>.
              </Trans>
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4'>
          <div className="m-4 space-y-8">
            <h2 className='text-[1.5rem] lg:text-[2.5rem]'>{t('subtitleDesorptionProcess')}</h2>
            <img src={BondBreak} alt="Bond Break" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-light'>
              <Trans i18nKey="paragraphDesorptionProcess">
                Once the sorbent starts to slow down its rate of capture meaning that the sorbent is reaching saturation, it is time to inject <span className="font-bold">energy</span> in some form in order to <span className="font-bold">break the bonds</span> and capture the CO₂.
              </Trans>
            </p>
          </div>
          <img src={BondBreak} alt="Bond Break" className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] lg:max-w-[25rem] hidden md:block rounded-xl"/>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4'>
          <img src={CFD} alt="Airflow" className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] lg:max-w-[25rem] hidden md:block rounded-xl"/>
          <div className="m-4 space-y-8">
            <h2 className='text-[1.5rem] lg:text-[2.5rem]'>{t('subtitleAirflow')}</h2>
            <img src={CFD} alt="Airflow" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-light'>
              <Trans i18nKey="paragraphAirflow">
                Due to an extremely low percentage of CO₂ in the atmosphere of approximately <span className="font-bold">0.04%</span>, airflow to the sorbent is key and optimization of <span className="font-bold">energy efficiency and speed</span> to get the sorbent close to saturation is one of our main goals.
              </Trans>
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4'>
          <div className="m-4 space-y-8">
            <h2 className='text-[1.5rem] lg:text-[2.5rem]'>{t('subtitleSensors')}</h2>
            <img src={CO2Sensor} alt="CO2 Sensor" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-light'>
              <Trans i18nKey="paragraphSensors">
                CO₂ sensors are hard to find at low price and the cheaper ones are unreliable because of factors such as
                <span className="font-bold">inconsistent airflow</span>
                to the sensing area and
                <span className="font-bold">calibration complexity</span>
                . They are key to understanding how much carbon has been captured. A
                <span className="font-bold">custom sensor package</span> needs to be implemented.
              </Trans>
            </p>
          </div>
          <img src={CO2Sensor} alt="CO2 Sensor" className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] lg:max-w-[25rem] hidden md:block rounded-xl"/>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4'>
          <img src={SolarPanel} alt="Solar Panel" className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] lg:max-w-[25rem] hidden md:block rounded-xl"/>
          <div className="m-4 space-y-8">
            <h2 className='text-[1.5rem] lg:text-[2.5rem]'>{t('subtitleEnergy')}</h2>
            <img src={SolarPanel} alt="Solar Panel" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-light'>
              <Trans i18nKey="paragraphEnergy">
              Ideally, power outlets do not need to be installed and the DACC can run anywhere with <span className="font-bold">solar power and battery backup</span>, for example. Creating the DACC with this consideration in mind ensures that the energy source is clean <span className="font-bold">independent of installation location</span>.
              </Trans>
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0'>
          <div className="m-4 space-y-8">
            <h2 className='text-[1.5rem] lg:text-[2.5rem]'>{t('subtitleCO2')}</h2>
            <img src={CalciumCarbonate} alt="Calcium Carbonate" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-light'>
              <Trans i18nKey="paragraphCO2">
                Although the main challenge for this prototype is to gather the carbon there are many ways to use carbon such as <span className="font-bold">3D printed filament</span>, using it to help <span className="font-bold">plant life</span> or simply <span className="font-bold">hiding it away</span> making sure it never rises to the surface again.
              </Trans>
            </p>
          </div>
          <img src={CalciumCarbonate} alt="Calcium Carbonate" className="max-h-[20rem] max-w-[20rem] lg:max-h-[25rem] lg:max-w-[25rem] hidden md:block rounded-xl"/>
        </div>
      </div>
    </>
  )
}

export default Prototype