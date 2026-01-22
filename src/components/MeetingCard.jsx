const MeetingCard = ({ title, description, time }) => {
  return (
    <div className="w-[351px] h-[152px] rounded-[5px] p-[10px] bg-[rgba(253,254,255,1)] border-[0.5px] border-[rgba(217,217,217,1)] shadow-[0_1px_8.5px_0_rgba(0,0,0,0.12)] opacity-100">
      {/* Top Content */}
      <div className="w-[331px] h-[110px] flex flex-col gap-[8px]">
        {/* Top Row: Title left, Date right */}
        <div className="w-[331px] h-[38px] flex justify-between items-center">
          <h2 className="w-[193px] h-[38px] text-[16px] font-medium font-roboto leading-[100%] text-black flex items-center justify-center">
            {title}
          </h2>
          <span className="w-[138px] h-[17px] text-[14px] font-medium font-inter leading-[100%] text-[rgba(97,97,97,1)] flex items-center">
            {time}
          </span>
        </div>

        {/* Second Row: Left Text */}
        <div className="w-[254px] h-[34px] text-[14px] font-inter font-inter leading-[100%] text-[rgba(97,97,97,1)] flex items-center">
          {description}
        </div>

        {/* Third Row: Status / Ongoing */}
        <div className="w-[68px] h-[22px] rounded-[26px] p-[5px] flex items-center gap-[2px] bg-[rgba(255,255,255,0.1)] shadow-[0_0_17px_0_rgba(0,0,0,0.12)]">
          <span className="w-[44px] h-[12px] text-[10px] font-medium font-inter leading-[100%] text-black flex items-center">
            On going
          </span>

          <div className="w-[10px] h-[10px] bg-[rgba(0,194,42,1)] rounded-full opacity-100"></div>
        </div>
      </div>

      {/*  Show only if ongoing */}
      <div className="flex items-center justify-end">
        <button className="w-[53px] h-[22px] flex justify-end bg-[rgba(0,140,255,1)] p-1 text-white text-[10px] font-medium rounded-[5px] p-[5px] flex items-center justify-end gap-[2px] shadow-[0_0_17px_0_rgba(0,0,0,0.12)] whitespace-nowrap opacity-100">
          Join now
        </button>
      </div>
    </div>
  );
};

export default MeetingCard;
