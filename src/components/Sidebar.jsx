import {
  LayoutDashboard,
  MessageCircle,
  Users,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[207px] mt-[30px] ml-[32px] h-[948px] p-[10px] flex flex-col gap-[10px] rounded-[10px] bg-white opacity-100 rotate-0 shadow-[0px_0px_14.4px_0px_rgba(0,0,0,0.07)] overflow-hidden">
      {/* Menu */}
      <div className="w-[187px] h-[906px] flex flex-col  opacity-100 rotate-0">
        <ul className="space-y-[15px] pt-5 font-roboto font-normal text-[16px] leading-[100%]">
          <li className="flex items-center gap-3 px-3 py-2 rounded-6px bg-purple-50 text-purple-600 font-medium cursor-pointer ">
            <LayoutDashboard size={16} />
            Dashboard
          </li>

          <li className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <Icon icon="si:projects-line" className="w-5 h-5" />
            Projects
          </li>

          <li className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <MessageCircle size={16} />
            Chats
          </li>

          <li className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <Users size={16} />
            Team/members
          </li>

          <li className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <BarChart2 size={16} />
            Report
          </li>
        </ul>

        {/* Bottom */}
        <div className="mt-auto flex flex-col gap-[25px]">
          {/* Upgrade Plan Card */}
          <div className="w-[187px] h-[104px] p-[10px] rounded-[14px] bg-[url('/images/bgimg.jpg')] bg-cover bg-center bg-no-repeat">
            {/* INNER WRAPPER */}
            <div className="w-[167px] flex flex-col gap-[5px]">
              {/* TOP SECTION */}
              <div className="w-[167px] h-[57px] flex items-start gap-[2px]">
                {/* LEFT CONTENT */}
                <div className="w-[145px] h-[57px] flex items-center">
                  <p className="font-roboto font-medium text-[16px] leading-[100%] text-white">
                    Get a new plan and explore amazing new features
                  </p>
                </div>

                {/* RIGHT ICON */}
                <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-gradient-to-b mt-2 from-white to-[#5300F8]">
                  <Icon
                    icon="streamline:star-2-solid"
                    className="w-[20px] h-[20px] text-white "
                  />
                </div>
              </div>

              {/* BOTTOM SECTION */}
              <div className="w-[70.95px] h-[22px] rounded-[14.85px] bg-white px-[5.5px] flex items-center">
                <div className="w-full flex items-center justify-between gap-[2.75px]">
                  <span className="w-[40px] text-[8px] font-roboto font-normal leading-[100%] text-black">
                    View Plans
                  </span>

                  <Icon
                    icon="majesticons:arrow-down"
                    className="w-[11px] h-[11px] rotate-[-90deg] text-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-[15px] mt-auto">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <Settings size={16} />
              Settings
            </div>

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <LogOut size={16} />
              Log out
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
