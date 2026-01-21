import { CheckCircle2 } from "lucide-react";
import { BiChat, BiCircle } from "react-icons/bi";
import { Icon } from "@iconify/react"; // token:chat icon

const priorityConfig = {
  High: {
    dot: "bg-[rgba(197,0,0,1)]",
    text: "text-[rgba(197,0,0,1)]",
  },
  Medium: {
    dot: "bg-[rgba(199,146,0,1)]",
    text: "text-[rgba(199,146,0,1)]",
  },
};

const ProjectCard = ({
  priority = "High",
  title,
  description,
  date,
  progress = 0,
  members = ["img1.png", "img2.png", "img3.png"],
  comments = 0,
  status = "Active",
  hideFooter = false,
}) => {
  return (
    <div className="w-full max-w-[351px] h-[158px] flex flex-col gap-[10px] p-[10px] rounded-[10px] bg-white shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)]">
      <div className="w-full h-[138px] flex flex-col gap-[2px]">
        {/* Top Row */}
        <div className="w-[331px] h-[22px] flex items-center justify-between p-1">
          <div className="w-[31px] h-[12px] flex items-center gap-[2px]">
            <div
              className={`w-[4.5px] h-[4.5px] rounded-full flex items-center justify-center ${
                priorityConfig[priority]?.dot
              }`}
            >
              <div className="w-[1px] h-[1px] rounded-full bg-white"></div>
            </div>

            <span
              className={`w-[18px] h-[10px] font-inter font-normal text-[8px] leading-[100%] tracking-[0%] ${priorityConfig[priority]?.text}`}
            >
              {priority}
            </span>
          </div>

          <div className="w-[74px] h-[22px] flex items-center gap-[2px] p-[5px]">
            <div className="w-[12] h-[12]">
              <Icon
                icon="fluent-mdl2:date-time"
                className={`w-[11.25px] h-[12px] ${priorityConfig[priority]?.text}`}
              />
            </div>
            <span
              className={`w-[50px] h-[10px] font-inter font-normal text-[8px] leading-[100%] tracking-[0%] ${priorityConfig[priority]?.text}`}
            >
              {date}
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full flex flex-col gap-[6px]">
          {/* Title */}
          <h2 className=" h-[19px] font-roboto font-medium text-[16px] leading-[19px] tracking-[0px] text-black opacity-100">
            {title}
          </h2>

          <p className=" h-[34px] font-inter font-normal text-[14px] leading-[14px] tracking-[0px] text-[rgba(97,97,97,1)] opacity-100">
            {description}
          </p>

          {/* Main progress bar */}
          <div className="flex items-center w-full">
            <div className="flex-1 h-[6px] rounded-[6px] border-[rgba(109,0,255,1)] bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-[6px] bg-[rgba(109,0,255,1)] transition-all"
                style={{ width: `${progress}%` }} // or % based on your logic
              />
            </div>
          </div>

          {/* Bottom row with left icon/text and right content */}
          <div className="flex justify-between items-center leading-none">
            {/* Left side */}
            <div className="flex items-center gap-1">
              <BiCircle className="w-[9px] h-[9px] border border-[rgba(109,0,255,1)] rounded-full relative top-[1px] left-[1.5px]" />
              <span className="font-inter text-[10px] leading-[10px] font-normal text-[rgba(109,0,255,1)]">
                Progress
              </span>
            </div>

            {/* Right side content */}
            <div className="flex items-center gap-[4px] w-[21px] h-[12px]">
              <span className="text-[rgba(109,0,255,1)] text-[10px] leading-[12px]">
                {progress}%
              </span>
            </div>
          </div>

          {/* Bottom Row */}
          {!hideFooter && (
            <div className="w-full h-[21px] flex justify-between ">
              {/* Left */}
              <div className=" flex gap-[20px]">
                {/* img */}
                <div className="w-[50px] h-[21px] relative">
                  {members.map((img, index) => (
                    <img
                      key={index}
                      src={`/images/${img}`}
                      alt="member"
                      className="w-[21px] h-[21px] rounded-full object-cover absolute top-0"
                      style={{ left: `${index * 12}px` }} // ← dynamic left via inline style
                    />
                  ))}
                </div>

                {/* Comments */}
                <div className="flex items-center gap-2">
                  {/* Chat Icon Container */}
                  <div className="w-[20px] h-[20px] relative">
                    {/* Inner Chat Icon */}
                    <BiChat className="absolute top-[2.97px] left-[2.5px] w-[15px] h-[14.06px] text-[rgba(0,119,255,1)]" />

                    {/* Notification Badge */}
                    <div className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] bg-[#EAD2FF] rounded-full flex items-center justify-center">
                      <span className="text-[8px] leading-[100%] font-roboto font-normal text-black text-center">
                        {comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="w-[54px] h-[18px] flex items-center gap-[2px] opacity-100">
                {/* Line Chart Icon */}
                <div className="w-[18px] h-[18px] relative flex items-center justify-center">
                  <Icon
                    icon="mynaui:line-chart-circle-solid"
                    className="w-[14.625px] h-[14.625px] text-[rgba(0,119,255,1)]"
                  />
                </div>

                {/* Status Text */}
                <div className="w-[34px] h-[14px] flex items-center justify-center">
                  <span className="text-[12px] font-roboto font-normal leading-[100%] text-[rgba(0,119,255,1)] text-center">
                    {status}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
