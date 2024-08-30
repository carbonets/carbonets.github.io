import carbonLogo from '../assets/carbonets.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguage = () => {
    const newLanguage = isEnglish ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
    localStorage.setItem('language', newLanguage); // Save the new language to localStorage
  };

  return (
    <div className='flex flex-col items-center bg-transparent font-semibold font-[sans-serif] text-[0.95rem]'>
      <div className='flex w-full tracking-wide shadow-lg min-h-[4.5rem] max-w-[80rem] justify-center'>
        <div className='hidden navbar-size:flex gap-5 justify-end items-center flex-1'>
          <a href='/team' className='text-white hover:text-carbonets-green'>
            {t('pageTeam')}
          </a>
          <a href='/prototype' className='text-white hover:text-carbonets-green'>
            {t('pagePrototype')}
          </a>
        </div>
        <div className='flex flex-1 mx-4 navbar-size:justify-center items-center'>
          <a href='/'>
            <img src={carbonLogo} alt='CarbonETS' className='h-[3.5rem]'/>
          </a>
        </div>
        <div className='hidden navbar-size:flex gap-5 justify-start items-center flex-1'>
          <a href='/competition' className='text-white hover:text-carbonets-green'>
            {t('pageCompetition')}
          </a>
          <button onClick={handleLanguage} className='px-4 py-2 text-sm rounded-3xl font-bold border-2 border-carbonets-green opacity-90 bg-carbonets-green transition-all ease-in-out duration-300 hover:bg-transparent text-carbonets-dark hover:text-carbonets-green'>
            {isEnglish ? 'FR' : 'EN'}
          </button>
        </div>
        <button onClick={toggleMenu} className='flex flex-1 navbar-size:hidden mx-4 justify-end items-center'>
          {isMenuOpen ? (
              // Close Icon
              <svg className="w-7 h-7 fill-carbonets-green" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-7 h-7 fill-carbonets-green" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )
          }
        </button>
      </div>
      <div className={`flex-col items-center gap-4 m-4 ${isMenuOpen ? 'flex' : 'hidden' }`}>
        <a href='/team' className='text-white hover:text-carbonets-green'>
          {t('pageTeam')}
        </a>
        <a href='/prototype' className='text-white hover:text-carbonets-green'>
          {t('pagePrototype')}
        </a>
        <a href='/competition' className='text-white hover:text-carbonets-green'>
          {t('pageCompetition')}
        </a>
        <button onClick={() => {handleLanguage(); toggleMenu();}} className='px-4 py-2 text-sm rounded-3xl font-bold border-2 border-carbonets-green opacity-90 bg-carbonets-green transition-all ease-in-out duration-300 hover:bg-transparent text-carbonets-dark hover:text-carbonets-green'>
          {isEnglish ? 'FR' : 'EN'}
        </button>
      </div>
    </div>
  )
}

export default Navbar;
