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
    <aside className="w-full max-w-[207px] mt-[30px] ml-5 h-[948px] p-[10px] flex flex-col gap-[10px] rounded-[10px] bg-white opacity-100 rotate-0 shadow-[0px_0px_14.4px_0px_rgba(0,0,0,0.07)] overflow-y-auto">
      {/* Menu */}
      <div className="w-[187px] h-[906px] flex flex-col gap-[424px] opacity-100 rotate-0">
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
    </aside>
  );
};

export default Sidebar;
