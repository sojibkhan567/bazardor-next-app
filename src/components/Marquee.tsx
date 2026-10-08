import MarqueeText from "react-fast-marquee";

const Marquee = () => {
    return (
        <div className='overflow-hidden border-b border-base-300 bg-base-100/95 backdrop-blur'>
            <ul className='flex shrink-0 items-center'>
                <MarqueeText autoFill={true} pauseOnHover={true} speed={150}>
                    <li className='flex items-center gap-1.5 border-e border-base-200 px-4 py-2 text-sm whitespace-nowrap'>
                        <span>🍚</span>
                        <span className="font-medium">স্বর্ণমাছি চাল</span>
                        <span className="text-base-content/70">১৪৮ টাকা/কেজি</span>
                        <span className="font-semibold price-up">▲ ২.১%</span>
                    </li>
                </MarqueeText>
            </ul>
        </div>
    )
}

export default Marquee