import { Icon } from "@iconify/react";
import { Btn } from "../../Index";
function Leftsaid() {
  return (
    <div className="w-[634px] h-[896px] pr-[10px] pl-[10px] pt-[20px] pb-[20px] gap-[40px] rotate-0 opacity-100 border-r-[0.5px] border-r-[rgba(217,217,217,1)]">
      {/* Top div */}
      <div class="w-[614px] h-[424.2px] gap-[65px] rotate-0 opacity-100">
        {/* top btn */}
        <div class="w-[176px] flex h-[29px] gap-[26px] rotate-0 opacity-100">
          <Btn iconName="mdi:share-variant" text="Share" />
          <Btn iconName="mdi:arrow-expand-all" text="Expand" />
        </div>
      </div>
      {/* bottom div */}
      <div class="w-[614px] h-[281.07px] gap-[25px] rotate-0 opacity-100"></div>
    </div>
  );
}

export default Leftsaid;
