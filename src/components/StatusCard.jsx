import { ArrowDown, ArrowUp } from "lucide-react";
import { Icon } from "@iconify/react";
// lucide icons

const StatusCard = ({
  title,
  icon: Icon,
  count,
  change,
  changeType,
  bottomLabel,
}) => {
  return (
    <div className="w-[214px] h-[98px] bg-white shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)] rounded-lg opacity-100 flex flex-col justify-between">
      {/* Top Content */}
      <div className="w-[214px] h-[63px] bg-[rgba(255,255,255,1)] opacity-100 flex flex-col gap-[10px] p-2.5 rounded-t-lg">
        <div className="w-[194px] h-[43px]  gap-[4px] opacity-100">
          <div className=" h-[20px] flex justify-between opacity-100">
            <span className="w-[107px] h-[19px] text-[16px] font-medium leading-[100%] tracking-[0%] whitespace-nowrap font-roboto text-black">
              {title}
            </span>
            <div className="w-[20px] h-[20px] p-[2px] rounded-[5px] border-[0.58px] border-[rgba(227,227,227,1)] flex items-center justify-center ">
              {Icon && <Icon className="w-full h-full" />}
            </div>
          </div>
          <span className="text-lg font-regular text-gray-900">{count}</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[214px] h-[35px] flex items-center justify-between bg-[rgba(250,250,250,1)] rounded-b-[10px] p-2">
        {/* Left side: label + arrow */}
        <div className="flex items-center gap-1 px-2 py-1 bg-[rgba(245,245,245,1)] rounded-[5px]">
          <span className="text-[12px] font-inter font-normal text-[rgba(97,97,97,1)]">
            {bottomLabel}
          </span>

          {/* Simple  arrow */}
          <span className="text-[rgba(97, 97, 97, 1)] font-bold text-[12px]">
            ^
          </span>
        </div>

        {/* Right side: change */}
        <span
          className={`text-xs font-semibold ${
            changeType === "down" ? "text-red-500" : "text-green-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatusCard;
