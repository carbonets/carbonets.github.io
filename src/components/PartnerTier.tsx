const PartnerTier = ({ partnerTier, opacity }: { partnerTier: any, opacity: number }) => {
    return (
        <div className={`flex justify-center items-center min-h-[80px] font-bold font-montserrat text-[2rem] bg-carbonets-green bg-opacity-${opacity} text-white`}>
            <div>{partnerTier}</div>
        </div>
    )
}

export default PartnerTier