import { Download } from "lucide-react";

const FileIteam = ({ imgSrc, name, size }) => {
  return (
    <div className="w-[390px] h-[60px] gap-5 flex items-center justify-between ">
      {/* Left Part */}
      <div className="w-[42px] h-[42px] rounded-[2px] bg-[#f4f4f4] flex items-center justify-center">
        <img src={imgSrc} alt={name} className="w-[24px] h-[24px]" />
      </div>

      <div className="w-[338px] h-[42px] flex flex-col justify-between">
        <div className="w-[190px] h-[42px] flex flex-col gap-[4px]">
          <p className="h-[19px] text-[16px] font-medium leading-[19px] text-[#616161] font-roboto opacity-100">
            {name}
          </p>

          <p className="text-[16px] font-normal leading-[16px] text-[#8b8b8b] font-['Roboto']">
            {size}
          </p>
        </div>
      </div>
      {/* Right Icon */}
      <div className="flex justify-end w-[18px] h-[18px]">
        <Download className="w-[18px] h-[18px] text-[rgba(97,97,97,1)] cursor-pointer" />
      </div>
    </div>
  );
};

export default FileIteam;
