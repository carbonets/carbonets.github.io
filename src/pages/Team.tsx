import Member from '../components/Member'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import DanielDanaie from '../assets/members/DanielDanaie.png'
import Rejeena from '../assets/members/Rejeena.jpg'
import Samuel from '../assets/members/Samuel.jpg'
import Mael from '../assets/members/Mael.jpg'
import Earth from '../assets/Earth.png'

const Team = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('teamPageTitle')}</title>
        <meta name="description" content={t('teamPageDescription')} />
      </Helmet>
      <div className='flex flex-col items-center mx-auto font-montserrat text-white font-bold mb-12'>
        <div className='text-[3rem] sm:text-[5rem] md:text-[8rem] text-center mb-8 text-carbonets-white'>
          {t('titleTeam')}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 justify-items-center mx-auto max-w-[1000px]'>
          <Member 
            role='roleCaptain'
            name="Daniel Danaie" 
            concentration='ele'
            imageSrc={DanielDanaie}
            linkedin="https://www.linkedin.com/in/danieldanaie/"
          />
          <Member 
            role='roleMember'
            name="Rejeena Sebastian" 
            concentration='eleResearch'
            imageSrc={Rejeena}
            linkedin="https://www.linkedin.com/in/rejeena-r-sebastian-717a061a9"
          />
          <Member 
            role='roleTechnicalDirector'
            name="Samuel Beausoleil" 
            concentration='log'
            imageSrc={Samuel}
            linkedin="https://www.linkedin.com/in/samuel-beausoleil-317b28160/"
          />
          <Member 
            role='roleMember'
            name="Mael Casagrande" 
            concentration='gpa'
            imageSrc={Mael}
            linkedin="https://www.linkedin.com/in/ma%C3%ABl-casagrande-38487a295/"
          />
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-blue bg-opacity-50 p-4 md:p-0'>
          <div className="m-4 space-y-8">
            <h2 className='text-[2rem] lg:text-[3rem]'>{t('joinTeam')}</h2>
            <img src="src\assets\Earth.png" alt="Earth" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
              <Trans i18nKey="joinTeamParagraph">
                The world needs you and so do we.<br/>Completing the form below does not commit you to anything, but will allow us to contact you to discuss the opportunities available to you at CarbonETS.
              </Trans>
            </p>
            <button className='bg-carbonets-green bg-opacity-70 border-carbonets-green border-solid border-[3px] text-slate-100 hover:text-carbonets-green hover:bg-slate-600 py-2 px-4 rounded text-[1.5rem]'
            onClick={() => {
              window.open('https://noteforms.com/forms/apprendre-a-vous-connaitre-lge24k', '_blank')
            }}
            >
              {t('joinTeamButton')}
            </button>
          </div>
          <img src={Earth} alt="Earth" className="max-h-[20rem] max-w-[20rem] lg:max-h-[30rem] lg:max-w-[30rem] hidden md:block"/>
        </div>
      </div>
    </>
  )
}

export default Team