import { Icon } from "@iconify/react";
import { ShoppingCart, DollarSign, Activity, Users } from "lucide-react";
import StatusCard from "../components/StatusCard";

function Dashboard() {
  return (
    <>
      <div className="mt-3 flex items-center justify-between mb-6">
        {/* Left */}
        <div className="mt-0 w-[132px] h-[35px] flex flex-col  leading-[100%] text-[rgba(109,0,255,1)] opacity-100">
          <h2 className="p-0 h-[19px] font-roboto font-medium text-[16px] ">
            Hey 👋🏻
          </h2>
          <p className=" h-[15px] font-inter font-normal text-[12px]">
            Welcome back
          </p>
        </div>

        {/* Right */}
        <div className="w-[211.8px] flex h-[26.5px] gap-[25.5px] opacity-100">
          <button className="w-[83.5px] h-[26.5px] flex items-center gap-[8.5px] pt-[4.25px] pr-[8.5px] pb-[4.25px] pl-[8.5px] bg-white rounded-[5px] opacity-100 shadow-[1.7px_0.85px_14.36px_0px_rgba(0,0,0,0.1)]">
            <Icon icon="material-symbols:filter-list" className="w-5 h-5" />
            <span className="w-[43px] h-[18px] font-roboto font-medium text-[15.3px] leading-[100%] tracking-[0] text-[rgba(139,139,139,1)] opacity-100">
              Filter
            </span>
          </button>

          <button className="w-[102.8px] h-[26.5px] flex items-center gap-[8.5px] pt-[4.25px] pr-[8.5px] pb-[4.25px] pl-[8.5px] bg-[rgba(109,0,255,1)] text-white rounded-[5px] opacity-100 shadow-[0.85px_0.85px_3.4px_rgba(0,0,0,0.1),5.1px_4.25px_5.95px_rgba(0,0,0,0.09),11.05px_8.5px_8.5px_rgba(0,0,0,0.05),19.55px_15.3px_10.2px_rgba(0,0,0,0.01),31.45px_24.65px_11.05px_rgba(0,0,0,0)]">
            {/* Icon */}
            <span className="w-[15.3px] h-[15.3px] flex items-center justify-center">
              <Icon
                icon="material-symbols:add"
                className="w-[15.3px] h-[15.3px] text-white"
              />
            </span>

            {/* Text */}
            <span className="w-[62px] h-[18px] flex font-roboto font-medium text-[15.3px] leading-[100%] tracking-[0%] whitespace-nowrap ">
              Add New
            </span>
          </button>
        </div>
      </div>
      {/* Space between welcome and cards */}
      <div className="flex justify-between flex-row gap-[20px] mt-0 pt-0">
        <StatusCard
          title="Active Project"
          icon={() => (
            <Icon
              icon="mynaui:panel-top-inactive"
              className="w-6 h-6 text-[rgba(109,0,255,1)]"
            />
          )}
          count="22"
          bottomLabel="From last month"
          change="+12.5%"
          changeType="up"
        />
        <StatusCard
          title="Complited"
          icon={() => (
            <Icon
              icon="ic:round-check"
              className="w-6 h-6 text-[rgba(109,0,255,1)]"
            />
          )}
          count="50+"
          bottomLabel="From last month"
          change="-5.4%"
          changeType="up"
        />
        <StatusCard
          title="Project deadlines"
          icon={() => (
            <Icon
              icon="fluent-mdl2:date-time"
              className="w-6 h-6 text-[rgba(109,0,255,1)]"
            />
          )}
          count="09"
          bottomLabel="From last month"
          change="+8.2%"
          changeType="up"
        />
        <StatusCard
          title="Overdue projects"
          icon={() => (
            <Icon
              icon="pajamas:calendar-overdue"
              className="w-6 h-6 text-[rgba(109,0,255,1)]"
            />
          )}
          count="07"
          bottomLabel="From last month"
          change="+3.1%"
          changeType="up"
        />
        <StatusCard
          title="Total project done"
          icon={() => (
            <Icon
              icon="si:projects-line"
              className="w-6 h-6 text-[rgba(109,0,255,1)]"
            />
          )}
          count="83+"
          bottomLabel="From last month"
          change="+4.6%"
          changeType="up"
        />
      </div>
    </>
  );
}

export default Dashboard;
