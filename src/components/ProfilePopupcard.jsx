import { IoLocationOutline } from "react-icons/io5";
import { Settings, LogOut, BriefcaseBusiness } from "lucide-react"; // md = Material Design

const ProfilePopupCard = () => {
  return (
    <div className="w-full  mt-2  max-w-[229px] flex flex-col gap-[10px] p-[10px]  rounded-[5px] bg-[rgba(108, 79, 79, 0.2)] shadow-[0_0_21px_rgba(0,0,0,0.1)]">
      <div className=" w-full max-w-[209px] h-[161px] flex flex-col gap-[12px]">
        {/* Profile Info */}
        <div className="min-w-[209px] max-w-full min-h-[60px] flex items-center gap-[10px] p-[6px] rounded-[5px] bg-white opacity-100">
          <img
            src="/images/userimg.png"
            alt="profile"
            className="min-w-[55px] max-w-[55px] min-h-[50px] max-h-[50px] rounded-[5px] opacity-100"
          />

          <div className="min-w-[127px] max-w-[127px] min-h-[44px] max-h-[44px] flex flex-col gap-[1px]">
            <h3 className="h-16 font-roboto font-medium text-[14px] leading-[100%] tracking-[0%] text-black">
              Sandipahir07
            </h3>

            <div className="min-w-[127px] max-w-[127px] min-h-[14px] max-h-[14px] flex gap-[10px] opacity-100">
              <BriefcaseBusiness size={12} />

              <span className="min-w-[78px] max-w-[78px] min-h-[13px] max-h-[13px] font-inter font-medium text-[11px] leading-[100%] tracking-[0%] text-[rgba(97,97,97,1)] opacity-100">
                Ui/Ux designer
              </span>
            </div>

            <div className="w-[84px] h-[12px] flex gap-[10px] rotate-0 ">
              <IoLocationOutline className="w-[12px] h-[12px]" />
              <span className="w-[62px] h-[10px] text-[8px] leading-[10px] font-inter font-normal text-[rgba(139,139,139,1)] opacity-100">
                Ahmedabad, Ind
              </span>
            </div>
          </div>
        </div>

        {/* View Profile Button */}
        <button className="w-[209px] h-[25px] iteam-center justify-center flex gap-[10px] rounded-[5px] bg-black text-white opacity-100">
          View Profile
        </button>

        {/* Settings + Logout */}
        <div className="w-[209px] h-[60px] flex flex-col gap-[5px] rounded-[5px] bg-white shadow-[0_0_21.3px_0_rgba(0,0,0,0.12)]">
          <div className="w-[199px] h-[25px] flex gap-[10px] p-[5px] rotate-0 opacity-100">
            <Settings size={12} />
            <p className="w-[47px] h-[15px] text-[12px] leading-[15px] font-inter font-normal text-[rgba(97,97,97,1)] opacity-100">
              Setting
            </p>
          </div>

          <div className="w-[199px] h-[25px]  flex gap-[10px] p-[5px] rotate-0 opacity-100">
            <LogOut size={16} />
            <p className="w-[47px] h-[15px] text-[12px] leading-[15px] font-inter font-normal text-[rgba(97,97,97,1)] opacity-100">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopupCard;
