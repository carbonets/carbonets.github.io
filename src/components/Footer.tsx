import React from 'react'
import dronoLogo from '../assets/dronolab.svg'
import ets from '../assets/ets.svg'
import {FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='flex w-full max-w-[80rem] mx-auto justify-center text-white text-[0.85rem] font-[sans-serif] font-semibold mt-6'>
            <div className='flex flex-1 items-start'>
                <div className='mr-6 my-2'>
                    <a href='/'>
                        <img src={dronoLogo} alt='Dronolab' className='h-[7.5rem]'/>
                    </a>
                </div>
                <div className='flex flex-col'>
                    <a href='/' className='hover:text-dronolab-accent'>
                        Home
                    </a>
                    <a href='/about' className='hover:text-dronolab-accent'>
                        About
                    </a>
                    <a href='/team' className='hover:text-dronolab-accent'>
                        Team
                    </a>
                    <a href='/competitions' className='hover:text-dronolab-accent'>
                        Competitions
                    </a>
                    <a href='/partners' className='hover:text-dronolab-accent'>
                        Partners
                    </a>
                    <a href='/contribute' className='hover:text-dronolab-accent'>
                        Contribute
                    </a>
                    <a href='/join' className='hover:text-dronolab-accent'>
                        Join Us!
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
                            514 396-8900, ext.7535
                        </p>
                        <p className='my-2'>
                            dronolab@ens.etsmtl.ca
                        </p>
                    </div>
                    <div className='flex my-6'>
                        <a href='https://www.facebook.com/dronolab' target="_blank"><FaFacebook className='mr-3 hover:fill-dronolab-accent' color='white' size={25}/></a>
                        <a href='https://www.instagram.com/dronolab' target="_blank"><FaInstagram className='mr-3 hover:fill-dronolab-accent' color='white' size={25}/></a>
                        <a href='https://www.youtube.com/dronolab' target="_blank"><FaYoutube className='mr-3 hover:fill-dronolab-accent' color='white' size={25}/></a>
                        <a href='https://www.github.com/dronolab' target="_blank"><FaGithub className='mr-3 hover:fill-dronolab-accent' color='white' size={25}/></a>
                        <a href='https://www.linkedin.com/company/dronolab/' target="_blank"><FaLinkedin className='hover:fill-dronolab-accent'color='white' size={25}/></a>
                    </div>
                </div>
                <div className='ml-6 my-2'>
                    <img src={ets} alt='ÉTS' className='h-[7.5rem]'/>
                </div>
            </div>
        </div>
        <div className='flex w-full text-white text-[0.8rem] font-[sans-serif] justify-center mx-auto'>
            Dronolab - ÉTS Drone Creation Team © 2024 École de technologie supérieure
        </div>
    </>
  )
}

export default Footer