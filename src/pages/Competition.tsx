import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Competition = () => {

  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const slides = [
    "src/assets/Competition1.jpg",
    "src/assets/Competition2.png",
    "src/assets/Competition3.jpg",
    "src/assets/Competition4.jpg",
    "src/assets/Competition5.jpg",
    "src/assets/Competition6.jpg"
  ];

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow(); // Set initial value
    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('competitionPageTitle')}</title>
      </Helmet>
      <div className='flex flex-col items-center mx-auto font-montserrat text-white font-bold mb-28'>
        <div className='text-[3rem] sm:text-[5rem] md:text-[7.5rem] text-center mb-8 text-carbonets-white'>
          {t('titleCompetition')}
        </div>
        <div className="relative w-full mb-16">
          <div className="absolute inset-0 flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-4 z-10 left-1/2 transform -translate-x-1/2">
            <img src="src/assets/CRCLogo.png" alt="solar" className="max-h-[25rem] max-w-[25rem] lg:max-w-[30rem] hidden md:block rounded-xl bg-white p-4"/>
            <div className="m-4 space-y-8">
              <img src="src/assets/CRCLogo.png" alt="Carbon Removal Challenge presented by" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto bg-white p-4"/>
              <h2 className='text-[1.5rem] lg:text-[2rem] text-white'>{t('crcDescription')}</h2>
            </div>
          </div>
          <div className="relative w-full">
            <img src="src/assets/NewYork.jpg" alt="New York" className="opacity-40 w-full min-h-[40rem] md:max-h-[40rem] object-cover object-bottom"/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center text-center md:text-left max-w-[65rem] p-4 md:p-0 mb-20'>
          <div className="m-4 space-y-8">
            <img src="src/assets/OpenAir.png" alt="Open Air" className="max-h-[20rem] max-w-[20rem] rounded-xl md:hidden mx-auto bg-white p-4"/>
            <h2 className='text-[1.5rem] lg:text-[2rem]'>{t('subtitleOrganizers')}</h2>
            <p className='text-[1rem] lg:text-[1.5rem] font-normal'>{t('paragraphOrganizers')}</p>
          </div>
          <img src="src/assets/OpenAir.png" alt="Open Air" className="max-h-[25rem] max-w-[25rem] lg:max-w-[30rem] hidden md:block rounded-xl bg-white p-4"/>
        </div>
        <div className="relative w-full mb-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentSlide / slidesToShow) * 100
              }%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 aspect-video">
                <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover object-center" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex justify-between items-center">
            <button
              className="bg-black bg-opacity-50 text-white p-2"
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              className="bg-black bg-opacity-50 text-white p-2"
              onClick={nextSlide}
            >
              ›
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-max items-center justify-center text-center p-4">
          <div className="flex flex-col items-center justify-center text-center p-4 border-b-2 md:border-b-0 md:border-r-2 border-carbonets-blue">
            <h2 className="text-[1.5rem] lg:text-[2rem] text-white">{t('stat1')}</h2>
            <p className="text-[0.75rem] lg:text-[1rem] font-normal text-carbonets-green">{t('statText1')}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4 border-b-2 md:border-b-0 md:border-r-2 border-carbonets-blue">
            <h2 className="text-[1.5rem] lg:text-[2rem] text-white">{t('stat2')}</h2>
            <p className="text-[0.75rem] lg:text-[1rem] font-normal text-carbonets-green">{t('statText2')}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-[1.5rem] lg:text-[2rem] text-white">{t('stat3')}</h2>
            <p className="text-[0.75rem] lg:text-[1rem] font-normal text-carbonets-green">{t('statText3')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competition;
