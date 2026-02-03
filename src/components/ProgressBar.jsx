import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

function ProgressBar({ value = 10 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(value), 200);
  }, [value]);

  return (
    <div className=" h-[60px] flex flex-col gap-[10px]">
      {/* Title */}
      <h2 className="font-roboto font-medium text-lg text-[var(--Heading-black)]">
        Overall Progress
      </h2>

      {/* Bar + bottom row */}
      <div className="flex flex-col gap-2">
        {/* Progress Bar */}
        <div className="w-full h-[9px] bg-[#D9D9D9] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#2563EB] rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center text-[#2563EB]">
          <div className="flex items-center gap-1 ">
            <Loader className="w-[12px] h-[12px]" />
            <span className="text-xs">Progress</span>
          </div>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
