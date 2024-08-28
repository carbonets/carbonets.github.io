import Member from '../components/Member'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

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
        <div className='md:flex md:space-x-8 space-y-8 mb-16 justify-center'>
          <div className='flex justify-center'>
            <Member 
              role='roleTechnicalDirector'
              name="Daniel Danaie" 
              concentration='ele'
              imageSrc="src\assets\members\DanielDanaie.png"
              linkedin="https://www.linkedin.com/in/danieldanaie/"
            />
          </div>
          <div className='text-center md:block text-[2.2rem] text-carbonets-green text-opacity-90 md:place-content-center max-w-[35rem]'>
            {t('funnyTeamMessage')}
          </div>
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
          <img src="src\assets\Earth.png" alt="Earth" className="max-h-[20rem] max-w-[20rem] lg:max-h-[30rem] lg:max-w-[30rem] hidden md:block"/>
        </div>
      </div>
    </>
  )
}

export default Team