import { useTranslation, Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import carbonetsLogo from '../assets/carbonets.png'
import DACwBckg from '../assets/DACwBckg.jpg'
import DACC from '../assets/DACC.png'
import Milan from '../assets/Milan.jpg'
import CRCLogoSquare from '../assets/CRCLogoSquare.jpg'
import Earth from '../assets/Earth.png'
import { Helmet } from 'react-helmet-async'

const Home = () => {

  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>{t('homePageTitle')}</title>
        <meta name="description" content={t('homePageDescription')} />
      </Helmet>
      <div className='flex flex-col items-center mx-auto font-montserrat text-white font-bold mb-12'>
        <div className="relative w-full mb-16">
          <div className="absolute inset-0 flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4 z-10 left-1/2 transform -translate-x-1/2">
            <img src={carbonetsLogo} alt="CarbonETS Logo" className="max-h-[25rem] max-w-[25rem] lg:max-w-[30rem] hidden md:block rounded-xl  p-4"/>
            <div className="m-4 space-y-8">
              <img src={carbonetsLogo} alt="CarbonETS Logo" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto p-4"/>
              <h2 className='text-[1.5rem] lg:text-[2rem] text-white'>{t('carbonetsDescription')}</h2>
            </div>
          </div>
          <div className="relative w-full">
            <img src={DACwBckg} alt="DACC zoomed out" className="opacity-40 w-full min-h-[40rem] md:max-h-[40rem] object-cover object-center"/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-green bg-opacity-50 p-4 md:p-0 mb-16'>
          <img src={DACC} alt="DACC" className="max-h-[20rem] max-w-[20rem] lg:max-h-[30rem] lg:max-w-[30rem] hidden md:block"/>
          <div className="m-4 space-y-8">
            <h2 className='text-[2rem] lg:text-[3rem]'>{t('titlePrototypeLower')}</h2>
            <img src={DACC} alt="DACC" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
              {t('prototypeDescription')}
            </p>
            <button
              className='bg-carbonets-blue bg-opacity-70 border-carbonets-blue border-solid border-[3px] text-slate-100 hover:text-carbonets-blue hover:bg-slate-600 py-2 px-4 rounded text-[1.5rem]'
              onClick={() => navigate('/prototype')}
            >
              {t('learnMoreButton')}
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-blue bg-opacity-50 p-4 md:p-0 mb-16'>
          <div className="m-4 space-y-8">
            <h2 className='text-[2rem] lg:text-[3rem]'>{t('subtitleMilan')}</h2>
            <img src={Milan} alt="Milan Bergeron-Brlek" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
              {t('milanDescription')}
            </p>
          </div>
          <img src={Milan} alt="Milan Bergeron-Brlek" className="max-h-[20rem] lg:max-h-[30rem] hidden md:block"/>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-green bg-opacity-50 p-4 md:p-0 mb-16'>
          <img src={CRCLogoSquare} alt="Carbon Removal Challenge Square Logo" className="max-h-[20rem] max-w-[20rem] lg:max-h-[30rem] lg:max-w-[30rem] hidden md:block p-4 bg-white"/>
          <div className="m-4 space-y-8">
            <h2 className='text-[2rem] lg:text-[3rem]'>{t('titleCompetitionLower')}</h2>
            <img src={CRCLogoSquare} alt="Carbon Removal Challenge Square Logo" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto p-4 bg-white"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
              {t('crcLongDescription')}
            </p>
            <button
              className='bg-carbonets-blue bg-opacity-70 border-carbonets-blue border-solid border-[3px] text-slate-100 hover:text-carbonets-blue hover:bg-slate-600 py-2 px-4 rounded text-[1.5rem]'
              onClick={() => navigate('/competition')}
            >
              {t('learnMoreButton')}
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-blue bg-opacity-50 p-4 md:p-0'>
          <div className="m-4 space-y-8">
            <h2 className='text-[2rem] lg:text-[3rem]'>{t('joinTeam')}</h2>
            <img src={Earth} alt="Earth" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
            <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
              <Trans i18nKey="joinTeamParagraph">
                The world needs you and so do we.<br/>Completing the form below does not commit you to anything, but will allow us to contact you to discuss the opportunities available to you at CarbonETS.
              </Trans>
            </p>
            <button
              className='bg-carbonets-green bg-opacity-70 border-carbonets-green border-solid border-[3px] text-slate-100 hover:text-carbonets-green hover:bg-slate-600 py-2 px-4 rounded text-[1.5rem]'
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

export default Home
