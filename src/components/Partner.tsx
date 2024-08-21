import React from 'react';

interface PartnerProps {
  name: string;
  image: string;
  website: string;
}

const Partner: React.FC<PartnerProps> = ({ name, image, website }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4 flex justify-center items-center w-full max-w-[300px]">
      <a href={website} target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center">
        <img 
          src={image} 
          alt={`${name} logo`} 
          className="h-[235px] object-contain max-w-full"
        />
      </a>
    </div>
  );
};

export default Partner;
