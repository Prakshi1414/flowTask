import { Icon } from "@iconify/react";

const OverdueCard = () => {
  return (
    <div className="w-[371px] h-[140px] rounded-[10px] p-[10px] flex flex-col gap-[10px] bg-white shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)] opacity-100">
      <div className="w-[351px] h-[128px] justify-start flex flex-col gap-[25px] opacity-100">
        {/* Header */}
        <div className="w-[351px] flex flex-row h-[21px] flex justify-between items-center">
          <h2 className="w-auto flex h-[21px] text-[18px] font-medium font-roboto leading-[100%] text-black whitespace-nowrap flex items-center justify-center">
            Overdue projects
          </h2>

          <div className="w-[20px] h-[20px] rounded-[2px] border-[0.3px] border-[rgba(189,189,189,1)] flex items-center justify-center relative">
            <Icon
              icon="pepicons-pencil:dots-y"
              className="w-[12.5px] h-[12.5px] absolute top-[4px]  text-[rgba(109,0,255,1)]"
            />
          </div>
        </div>

        {/* Inner Card */}
        <div className="w-[351px] h-[82px] rounded-[10px] p-[5px] flex flex-col  gap-[6px] border-[0.5px] border-[rgba(217,217,217,1)] ">
          <h3 className="w-[341px] h-[19px] text-[16px] font-medium font-roboto leading-[100%] text-black flex items-center ">
            CRM Redesign – Wireframe Approval
          </h3>

          <p className="w-[341px] h-[15px] text-[12px] justify-start font-normal font-inter leading-[100%] text-[rgba(97,97,97,1)] flex items-center ">
            Overdue by: 2 days (Due: August 23, 2025)
          </p>

          {/* Status Badge */}
          <div className="w-full flex justify-end h-[25px] rounded-[20px] items-center">
            <span className="px-[5px] h-[15px] text-[12px] rounded-[20px] font-normal bg-[rgba(249,249,249,1)] font-inter leading-[100%] text-black flex items-center">
              Waiting on Client Feedback
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverdueCard;
