import { LuCalendarDays } from "react-icons/lu"; // Calendar icon
import { Edit } from "lucide-react";

const Task = ({ taskName, date, status = "due" }) => {
  return (
    <div className="flex w-[351px] flex-col gap-[2px] opacity-100 px-2">
      {/* Top row: GrAdd + Task name left, Edit right */}
      {/* First Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-[309px] h-[16px] font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-black opacity-100">
            {taskName}
          </span>
        </div>
        <div className="w-[20px] h-[20px] gap-[10px] opacity-100">
          <Edit className="w-[12x] h-[12px] relative top-[1px] left-[1.5px]  border-[rgba(97,97,97,1)] opacity-100" />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <LuCalendarDays />
        <span>
          {status === "completed" ? `Completed : ${date}` : `Due : ${date}`}
        </span>
      </div>
    </div>
  );
};

export default Task;
