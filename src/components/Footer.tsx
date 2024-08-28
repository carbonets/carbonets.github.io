import carbonLogo from '../assets/carbonets.png'
import ets from '../assets/ets.svg'
import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

const Footer = () => {

    const { t } = useTranslation();
    return (
        <>
            <div className='flex flex-col md:flex-row w-full max-w-[60rem] mx-auto justify-center text-white text-[0.85rem] font-[sans-serif] font-semibold mt-6'>
                <div className='flex flex-1 flex-col md:flex-row md:items-center'>
                    <div className='mb-4 md:mr-4 md:mb-0 hidden md:block'>
                        <a href='/'>
                            <img src={carbonLogo} alt='CarbonETS' className='h-[7.5rem]'/>
                        </a>
                    </div>
                    <div className='flex-col text-center md:text-left hidden md:flex'>
                        <a href='/' className='hover:text-carbonets-green mb-2'>
                            {t("pageHome")}
                        </a>
                        <a href='/team' className='hover:text-carbonets-green mb-2'>
                            {t("pageTeam")}
                        </a>
                        <a href='/prototype' className='hover:text-carbonets-green mb-2'>
                            {t("pagePrototype")}
                        </a>
                        <a href='/competition' className='hover:text-carbonets-green'>
                            {t("pageCompetition")}
                        </a>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center md:ml-4'>
                    <div className='flex flex-col text-center md:text-left'>
                        <p className='my-2 hidden md:block'>
                            <Trans i18nKey="address">
                                1219, Rue William,<br/> Montréal, QC, H3C 1R1
                            </Trans>
                        </p>
                        <p className='my-2 hidden md:block'>
                            438-808-0923
                        </p>
                        <p className='my-2 hidden md:block'>
                            daniel.danaie.1@ens.etsmtl.ca
                        </p>
                        <div className='flex my-4 justify-center md:justify-start'>
                            <a href='https://www.facebook.com/carbonets' target="_blank"><FaFacebook className='mr-3 hover:fill-carbonets-green' color='white' size={25} /></a>
                            <a href='https://www.instagram.com/carbonetsmtl' target="_blank"><FaInstagram className='mr-3 hover:fill-carbonets-green' color='white' size={25} /></a>
                            <a href='https://www.youtube.com/@carbonets' target="_blank"><FaYoutube className='mr-3 hover:fill-carbonets-green' color='white' size={25} /></a>
                            <a href='https://www.github.com/carbonets' target="_blank"><FaGithub className='mr-3 hover:fill-carbonets-green' color='white' size={25} /></a>
                            <a href='https://www.linkedin.com/company/carbonets/' target="_blank"><FaLinkedin className='hover:fill-carbonets-green' color='white' size={25} /></a>
                        </div>
                    </div>
                    <div className='mb-4 md:ml-4 hidden md:block'>
                        <img src={ets} alt='ÉTS' className='h-[7.5rem]' />
                    </div>
                </div>
            </div>
            <div className='flex w-full text-white text-[0.8rem] font-[sans-serif] justify-center p-4 mt-4'>
                {t("footerText")}
            </div>
            <div className='mb-4 md:ml-6 md:hidden'>
                <img src={ets} alt='ÉTS' className='h-[7.5rem] mx-auto m-4' />
            </div>
        </>
    )
}

export default Footer
