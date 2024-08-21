import React, { ReactNode } from 'react';

interface PartnerSectionProps {
    children: ReactNode;
    partnersPerRow: number;
  }

const PartnerSection: React.FC<PartnerSectionProps> = ({ children, partnersPerRow }) => {
    const gridClass = `grid-cols-${partnersPerRow}`;	
    
    return (
        <div className='flex justify-center'>
            <div className={`grid ${gridClass} gap-4 place-items-center m-4`}>
                {children}
            </div>
        </div>
    );
};

export default PartnerSection;