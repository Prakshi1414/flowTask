import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const options = ["Started", "On hold", "In review", "Completed"];

export default function ProjectStatusDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Started");

  return (
    <div className="w-full max-w-[239px] flex flex-col gap-[10px] border-none">
      {/* Label */}
      <label className="w-[239px] h-[21px]  font-sans font-medium text-lg leading-none tracking-normal text-black">
        Project status
      </label>

      {/* Select Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-[239px] flex h-[39px] flex justify-between rounded-[5px] border-[0.5px] p-2.5 bg-white border-gray-200"
      >
        <span className="flex-1 whitespace-nowrap overflow-hidden  h-[19px] rotate-0 opacity-100 font-roboto font-normal text-base leading-[100%] tracking-[0] text-[rgba(97,97,97,1)]">
          {selected}
        </span>
        <ChevronDown
          className={`w-[14px] h-[24px] opacity-100 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="w-[239px] mt-1 p-[5px] gap-[2px] flex flex-col rounded-[5px] bg-white shadow-[0px_2px_10.7px_0px_rgba(0,0,0,0.2)]">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="w-full h-[32px] flex justify-between items-center px-2 rounded-[5px] border border-[rgba(217,217,217,1)] bg-[rgba(250,250,250,1)] cursor-pointer hover:bg-gray-100"
            >
              <span className="font-roboto font-normal text-[15px] text-[rgba(139,139,139,1)] whitespace-nowrap">
                {item}
              </span>

              {selected === item && (
                <Check className="w-4 h-4 text-[rgba(139,139,139,1)]" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
