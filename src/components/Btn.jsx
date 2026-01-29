import { Icon } from "@iconify/react";

const Btn = ({ iconName, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[81px] h-[29px] flex items-center justify-center rounded-[5px] border border-[rgba(235,235,235,1)] bg-[rgba(255,255,255,1)] opacity-100 hover:bg-gray-100 transition-all`}
    >
      {/* Left Icon Container */}
      <div className="w-[16px] h-[16px]">
        {iconName && (
          <Icon
            icon={iconName}
            className="w-[15px] h-[15px] text-[rgba(139,139,139,1)] "
          />
        )}
      </div>

      {/* Right Text */}
      <span className="w-[53px] h-[19px] text-[14px] font-roboto font-regular leading-[100%] text-[rgba(139,139,139,1)]">
        {text}
      </span>
    </button>
  );
};

export default Btn;
