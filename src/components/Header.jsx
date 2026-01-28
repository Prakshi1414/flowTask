import { Search } from "lucide-react";
import { Icon } from "@iconify/react";

const Header = ({ showProfilePopup, setShowProfilePopup }) => {


  return (
    <header className="w-full max-w-[1450px] mt-[34px] h-20 flex items-center justify-start px-7 bg-white ">
      {/* Left section: Logo + Search */}
      <div className=" w-full flex  gap-[95px] ml-[32px]">
        <img
          src="/images/Flowtask.png"
          alt="Flowtask Logo"
          className="w-[132px] h-[26px] mt-2 object-contain "
        />

        <div className="flex items-center gap-[10px] w-[775px] h-[45px] rounded-[5px] bg-white border border-gray-200 px-[30px] py-[5px] shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)]">
          <Search size={16} className="text-[rgba(139,139,139,1)]" />
          <input
            type="text"
            placeholder="Search projects, tasks, or meetings"
            className="w-[217px] h-[16px] p-3 bg-transparent text-[13px] font-normal font-inter leading-[100%] outline-none"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center w-[143px] h-[45px] gap-[30px] opacity-100">
        <div className="relative w-[45px] h-[45px] flex items-center justify-center bg-white rounded-[5px] border border-[rgba(238,238,238,1)] p-[10px] cursor-pointer">
          <div className="relative flex items-center justify-center">
            <Icon
              icon="material-symbols-light:notifications-unread-outline"
              className="w-[20px] h-[18px]text-[rgba(0,0,0,1)]"
            />
            <div className="absolute -top-[7px] -right-[6px] w-[15px] h-[15px] rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-[13px] font-semibold font-roboto leading-none text-white">
                5
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[10px] w-[65px] h-[45px] opacity-100 cursor-pointer">
          <div className="w-[45px] h-[45px] rounded-[5px] overflow-hidden opacity-100"   onClick={() => setShowProfilePopup(!showProfilePopup)}>
            <img
              src="/images/userimg.png"
              alt="profile"
              className="w-full h-full object-cover"
              
            />
          </div>

          <Icon
            icon="weui:arrow-outlined"
            className="right-6 w-[10px] h-[20px] rotate-90 opacity-100"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
