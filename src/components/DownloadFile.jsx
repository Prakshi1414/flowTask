import { Plus } from "lucide-react";
import { FileIteam } from "./Index";

function DownloadFile() {
  return (
    <div className="w-[400px] h-[255px] pt-[15px] pr-[5px] pb-[15px] pl-[5px] mt-[25px] border-t border-gray-300  opacity-100">
      {/* Header */}
      <div className="flex flex-col gap-[25px]">
        <div className="w-[390px] h-[24px] flex justify-between mt-[10px] ">
          <h2 className="w-[39px] h-[21px] rotate-0 opacity-100 flex justify-start font-roboto font-medium text-[18px] leading-[100%] tracking-[0] text-[rgba(0,0,0,1)]">
            Files
          </h2>
          <button className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-[5px]  bg-[rgba(239,239,239,1)]">
            <Plus className="w-[13px] h-[13px] text-[rgba(109,0,255,1)]" />
          </button>
        </div>
        <div className="w-[390px] h-[176px] flex flex-col ">
          <FileIteam
            imgSrc="/images/fileimg1.png"
            name="UI_Design_Wireframes.pdf"
            size="3.2 MB"
          />
          <FileIteam
            imgSrc="/images/fileimg2.png"
            name="Project_Orion_Requirements.fig"
            size="1.8 MB"
          />
          <FileIteam
            imgSrc="/images/fileimg3.png"
            name="Development_SprintPlan.xlsx"
            size="2.5 MB"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadFile;
