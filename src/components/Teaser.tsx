import React from 'react';

interface TeaserProps {
  right: boolean;
  title: string;
  paragraph: string;
  imageSrc: string;
  alt: string;
}


const Teaser: React.FC<TeaserProps> = ({ right, title, paragraph, imageSrc, alt }) => {

    const leftContent =
        right ? 
            <></>
        : 
            <img src={imageSrc} alt={alt} className="w-[235px] cursor-pointer" />
        ;
    const rightContent =
        right ? 
            <img src={imageSrc} alt={alt} className="w-[235px] cursor-pointer" />
        : 
            <></>
        ;

  return (
    <div className="flex text-carbonets-dark rounded-xl w-[1000px]">
      {leftContent}
      <div className="bg-white font-montserrat p-2">  
        <p className="font-bold">{title}</p>
        <p className="text-[0.8rem]">{paragraph}</p>
      </div>
      {rightContent}
    </div>
  );
};

export default Teaser;
