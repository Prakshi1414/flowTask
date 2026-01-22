const PendingMeetingCard = ({
  title,
  subtitle,
  platform,
  time,
  className = "",
}) => {
  return (
    <div
      className={`w-[351px] mt-1 h-[108px] flex flex-col gap-[10px] p-[10px] rounded-[5px] border-[0.5px] border-[rgba(217,217,217,1)] bg-[rgba(249,249,249,0.75)] opacity-100
        ${className}`}
    >
      {/* top Content */}
      <div className="w-full h-[63px] flex flex-col items-start gap-[8px]">
        <div className="w-full h-[38px] flex items-center justify-between">
          <span className="max-w-[192px] text-[16px] font-medium font-roboto leading-[100%] text-black">
            {title}
          </span>

          <span className="text-[14px] font-medium font-inter text-[rgba(97,97,97,1)] whitespace-nowrap">
            {time}
          </span>
        </div>

        <span className="w-full text-[14px] font-inter font-inter text-[rgba(97,97,97,1)]">
          {subtitle}
        </span>
      </div>

      {/* bottom */}
      <span className="w-[136px]  h-[17px] text-[14px] font-normal font-inter text-[rgba(97,97,97,1)]">
        {platform}
      </span>
    </div>
  );
};

export default PendingMeetingCard;
