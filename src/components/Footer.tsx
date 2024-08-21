import carbonLogo from '../assets/carbonets.png'
import ets from '../assets/ets.svg'
import {FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='flex w-full max-w-[80rem] mx-auto justify-center text-white text-[0.85rem] font-[sans-serif] font-semibold mt-6'>
            <div className='flex flex-1 items-start'>
                <div className='mr-6 my-2'>
                    <a href='/'>
                        <img src={carbonLogo} alt='Carbon ÉTS' className='h-[7.5rem]'/>
                    </a>
                </div>
                <div className='flex flex-col'>
                    <a href='/' className='hover:text-carbonets-green'>
                        Home
                    </a>
                    <a href='/team' className='hover:text-carbonets-green'>
                        Team
                    </a>
                    <a href='/join' className='hover:text-carbonets-green'>
                        Join
                    </a>
                    <a href='/roadmap' className='hover:text-carbonets-green'>
                        Roadmap
                    </a>
                    <a href='/competitions' className='hover:text-carbonets-green'>
                        Competitions
                    </a>
                    <a href='/partners' className='hover:text-carbonets-green'>
                        Partners
                    </a>
                </div>
            </div>
            <div className='flex items-start'>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <p className='my-2'>
                            1219, Rue William,<br></br> Montréal, QC, H3C 1R1
                        </p>
                        <p className='my-2'>
                            438-808-0923
                        </p>
                        <p className='my-2'>
                            daniel.danaie.1@ens.etsmtl.ca
                        </p>
                    </div>
                    <div className='flex my-6'>
                        <a href='https://www.facebook.com/carbonets' target="_blank"><FaFacebook className='mr-3 hover:fill-carbonets-green' color='white' size={25}/></a>
                        <a href='https://www.instagram.com/carbonetsmtl' target="_blank"><FaInstagram className='mr-3 hover:fill-carbonets-green' color='white' size={25}/></a>
                        <a href='https://www.youtube.com/@carbonets' target="_blank"><FaYoutube className='mr-3 hover:fill-carbonets-green' color='white' size={25}/></a>
                        <a href='https://www.github.com/carbonets' target="_blank"><FaGithub className='mr-3 hover:fill-carbonets-green' color='white' size={25}/></a>
                        <a href='https://www.linkedin.com/company/carbonets/' target="_blank"><FaLinkedin className='hover:fill-carbonets-green'color='white' size={25}/></a>
                    </div>
                </div>
                <div className='ml-6 my-2'>
                    <img src={ets} alt='ÉTS' className='h-[7.5rem]'/>
                </div>
            </div>
        </div>
        <div className='flex w-full text-white text-[0.8rem] font-[sans-serif] justify-center mx-auto'>
            Carbon ÉTS - ÉTS Carbon Removal Team © 2024 École de technologie supérieure
        </div>
    </>
  )
}

export default Footer