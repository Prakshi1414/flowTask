// Task.jsx
import React from "react";
import { GrAdd } from "react-icons/gr";
import { Edit } from "lucide-react";
import { Calendar } from "lucide-react";

const Task = ({ taskName,  onAdd, onEdit }) => {
  return (
    <div className="flex w-[351px] flex-col gap-[2px] opacity-100 px-2">
      {/* Top row: GrAdd + Task name left, Edit right */}
      <div className="flex items-center justify-between w-full h-[37px]">
        <div className="flex items-center gap-[5px]">
          <GrAdd
            size={13}
            className="text-black cursor-pointer"
            onClick={onAdd}
          />
          <h3 className="text-gray-800 font-medium">{taskName}</h3>
        </div>

        <Edit
          size={12}
          className="text-gray-500 cursor-pointer border border-[rgba(97,97,97,1)]"
          onClick={onEdit}
        />
      </div>

      <div className="flex items-center gap-[2px] mt-[2px] h-[16px]">

      </div>
    </div>
  );
};

export default Task;
