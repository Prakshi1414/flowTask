import { Icon } from "@iconify/react";

function Objective({ text }) {
  return (
    <div className="w-[594px] h-[24px] pl-[5px] flex pr-[5px] items-center bg-white">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[rgba(0,194,42,1)] mr-2">
        <Icon icon="mdi:check-outline" className="w-4 h-4 text-white" />
      </div>
      <span className="font-inter font-normal text-base text-[var(--Sub-text)]">
        {text}
      </span>
    </div>
  );
}

export default Objective;
