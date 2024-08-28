import { useTranslation, Trans } from 'react-i18next'

const Home = () => {

  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center mx-auto font-montserrat text-white font-bold mb-28'>
      <div className="relative w-full mb-16">
        <div className="absolute inset-0 flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4 z-10 left-1/2 transform -translate-x-1/2">
          <img src="src/assets/carbonets.png" alt="solar" className="max-h-[25rem] max-w-[25rem] lg:max-w-[30rem] hidden md:block rounded-xl  p-4"/>
          <div className="m-4 space-y-8">
            <img src="src/assets/carbonets.png" alt="Carbon Removal Challenge presented by" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto p-4"/>
            <h2 className='text-[1.5rem] lg:text-[2rem] text-white'>{t('carbonetsDescription')}</h2>
          </div>
        </div>
        <div className="relative w-full">
          <img src="src/assets/DACwBckg.png" alt="New York" className="opacity-40 w-full min-h-[40rem] md:max-h-[40rem] object-cover object-center"/>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-green bg-opacity-50 p-4 md:p-0 mb-16'>
        <div className="m-4 space-y-8">
          <h2 className='text-[2rem] lg:text-[3rem]'>{t('titlePrototype')}</h2>
          <img src="src\assets\DACC.png" alt="Earth" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
          <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
            {t('prototypeDescription')}
          </p>
          <button className='bg-carbonets-blue bg-opacity-70 border-carbonets-blue border-solid border-[3px] text-slate-100 hover:text-carbonets-blue hover:bg-slate-600 py-2 px-4 rounded text-[1.5rem]'>
            {t('learnMoreButton')}
          </button>
        </div>
        <img src="src\assets\DACC.png" alt="Earth" className="max-h-[20rem] max-w-[20rem] lg:max-h-[30rem] lg:max-w-[30rem] hidden md:block"/>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-blue bg-opacity-50 p-4 md:p-0 mb-16'>
        <div className="m-4 space-y-8">
          <h2 className='text-[2rem] lg:text-[3rem]'>{t('subtitleMilan')}</h2>
          <img src="src\assets\Milan.jpg" alt="Earth" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
          <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
            {t('milanDescription')}
          </p>
        </div>
        <img src="src\assets\Milan.jpg" alt="Earth" className="max-h-[20rem] lg:max-h-[30rem] hidden md:block"/>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-blue bg-opacity-50 p-4 md:p-0 mb-16'>
        <div className="m-4 space-y-8">
          <h2 className='text-[2rem] lg:text-[3rem]'>{t('titleCompetition')}</h2>
          <img src="src\assets\CRCLogoSquare.jpg" alt="Earth" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
          <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
            {t('crcLongDescription')}
          </p>
          <button className='bg-carbonets-green bg-opacity-70 border-carbonets-green border-solid border-[3px] text-slate-100 hover:text-carbonets-green hover:bg-slate-600 py-2 px-4 rounded text-[1.5rem]'>
            {t('learnMoreButton')}
          </button>
        </div>
        <img src="src\assets\CRCLogoSquare.jpg" alt="Earth" className="max-h-[20rem] max-w-[20rem] lg:max-h-[30rem] lg:max-w-[30rem] hidden md:block"/>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:rounded-xl md:shadow-lg overflow-hidden items-center text-center max-w-[65rem] bg-carbonets-blue bg-opacity-50 p-4 md:p-0 mb-16'>
        <div className="m-4 space-y-8">
          <h2 className='text-[2rem] lg:text-[3rem]'>{t('joinTeam')}</h2>
          <img src="src\assets\Earth.png" alt="Earth" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto"/>
          <p className='text-[1rem] lg:text-[1.5rem] font-medium'>
            <Trans i18nKey="joinTeamParagraph">
              The world needs you and so do we.<br/>Completing the form below does not commit you to anything, but will allow us to contact you to discuss the opportunities available to you at CarbonETS.
            </Trans>
          </p>
          <button className='bg-carbonets-green bg-opacity-70 border-carbonets-green border-solid border-[3px] text-slate-100 hover:text-carbonets-green hover:bg-slate-600 py-2 px-4 rounded text-[1.5rem]'>
            {t('joinTeamButton')}
          </button>
        </div>
        <img src="src\assets\Earth.png" alt="Earth" className="max-h-[20rem] max-w-[20rem] lg:max-h-[30rem] lg:max-w-[30rem] hidden md:block"/>
      </div>
    </div>
  )
}

export default Home