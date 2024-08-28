import React from 'react';
import { useTranslation } from 'react-i18next';

interface MemberProps {
  role: string;
  name: string;
  concentration: string;
  imageSrc: string;
  linkedin?: string; // Optional prop
}

const Member: React.FC<MemberProps> = ({ role, name, concentration, imageSrc, linkedin }) => {
  const { t } = useTranslation(); // Moved inside the component

  return (
    <div className="text-carbonets-dark rounded-xl w-[235px] overflow-hidden">
      {linkedin ? (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={name} className="cursor-pointer" />
        </a>
      ) : (
        <img src={imageSrc} alt={name} />
      )}
      <div className="bg-white font-montserrat p-2">
        <p className="text-[0.95rem]">{t(role)}</p>
        <p className="font-bold tracking-wide">{name}</p>
        <p className="text-[0.8rem]">{t(concentration)}</p>
      </div>
    </div>
  );
};

export default Member;
