import { Icon } from "@iconify/react";

const NotificationCard = ({ name, role, message }) => {
  return (
    <div className="w-[351px] h-[95px] p-[5px] rounded-[10px] border-[0.5px] border-[rgba(217,217,217,1)] shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)] opacity-100">
      <div className="w-[341px] h-[85px] flex flex-col gap-[3px] opacity-100">
        {/* Header */}
        <div className="w-[341px] h-[32px] flex flex-col gap-[2px]">
          <div className="w-[341px] h-[20px] flex  justify-between">
            <h3 className="font-roboto font-medium text-[14px] leading-[16px] tracking-[0%] text-black truncate">
              {name}
            </h3>
            <button className="w-[20px] h-[20px] rounded-[2px] border-[0.3px] border-[rgba(189,189,189,1)] flex items-center justify-center opacity-100">
              <Icon
                icon="pepicons-pencil:dots-y"
                className="w-[12px] h-[12px] text-black"
              />
            </button>
          </div>

          <p className="w-[341px] h-[12px] font-roboto flexwrap-newwrap font-medium text-[10px] leading-[12px] tracking-[0%] text-[rgba(180,180,180,1)]">
            {role}
          </p>
        </div>

        {/* Message bubble */}
        <div className="w-[341px] flex p-[10px] rounded-[5px] bg-[rgba(249,249,249,1)] opacity-100">
          <p className="w-full font-inter font-medium text-[12px] leading-[16px] tracking-[0%] text-[rgba(97,97,97,1)]">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
