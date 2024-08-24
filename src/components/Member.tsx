import React from 'react';

type Concentration = 'ele' | 'log' | 'gol' | 'gpa' | 'mec' | 'cut' | 'ctn';

interface MemberProps {
  role: string;
  name: string;
  concentration: Concentration;
  imageSrc: string;
  linkedin?: string; // Optional prop
}

const concentrationMap: Record<Concentration, string> = {
  ele: 'electrical engineering',
  log: 'software engineering',
  gol: 'logistics engineering',
  gpa: 'automation engineering',
  mec: 'mechanical engineering',
  cut: 'pre-university engineering',
  ctn: 'construction engineering',
};

const Member: React.FC<MemberProps> = ({ role, name, concentration, imageSrc, linkedin }) => {
  const concentrationText = concentrationMap[concentration] || 'unknown concentration';

  const imageContent = 
    (linkedin && linkedin !== "") ? 
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={name} className="cursor-pointer" />
      </a>
     : 
      <img src={imageSrc} alt={name} />
    ;

  return (
    <div className="text-carbonets-dark rounded-xl w-[235px] overflow-hidden">
      {imageContent}
      <div className="bg-white font-montserrat p-2">
        <p className="text-[0.95rem]">{role}</p>
        <p className="font-bold tracking-wide">{name}</p>
        <p className="text-[0.8rem]">{concentrationText}</p>
      </div>
    </div>
  );
};

export default Member;
