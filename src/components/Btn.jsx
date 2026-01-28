import { Icon } from "@iconify/react";

const Btn = ({ iconName, text, className }) => {
  return (
    <button
      className={`w-[69px] h-[29px] flex items-center justify-between gap-[2px] p-[5px] rounded-[5px] border border-[rgba(235,235,235,1)] bg-[rgba(255,255,255,1)] opacity-100 hover:bg-gray-100 transition-all ${className}`}
    >
      {/* Left Icon Container */}
      <div className="w-[16px] h-[16px] relative">
        {iconName && (
          <Icon
            icon={iconName}
            className="w-[12px] h-[10px] text-[rgba(139,139,139,1)] absolute top-[3.33px] left-[2px]"
          />
        )}
      </div>

      {/* Right Text */}
      <span className="w-[41px] h-[19px] text-[14px] font-roboto font-normal leading-[100%] text-[rgba(139,139,139,1)]">
        {text}
      </span>
    </button>
  );
};

export default Btn;
