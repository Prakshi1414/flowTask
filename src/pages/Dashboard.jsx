import { Icon } from "@iconify/react";
import StatusCard from "../components/StatusCard";
import { GrAdd } from "react-icons/gr";
import { ProjectCard, Task, RightPart } from "../components/Index";
import { CenterPart } from "../components/Index";

function Dashboard() {
  return (
    <div className=" mt-2 pl-5 h-screen w-full min-h-[948px]  opacity-100">
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
      <div className="flex w-full justify-between flex-row gap-[20px] mt-0 pt-0">
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

      {/* Main content */}
      <div className=" mt-8 w-full flex justify-between h-[752px] gap-[20px] opacity-100">
        {/* LEFT COLUMN  */}
        <div className="flex flex-col  ">
          {/* Active Projects */}
          <div className="w-[371px] h-[500px] flex flex-col gap-[18px] opacity-100 bg-gray shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)] rounded-lg">
            <div className="w-[351px] h-[21px] flex justify-between p-5 items-center opacity-100 ">
              {/* Left Content */}
              <div className="w-[121px] h-[21px] flex items-center gap-[25]">
                <span className="font-roboto font-medium text-[18px] leading-[100%] text-black">
                  Active projects
                </span>
              </div>

              {/* Right Content */}
              <div className="w-[49px] h-[12px] flex items-center gap-[1px]">
                {/* Text */}
                <span className="w-[38px] h-[12px] text-[10px] font-inter font-regular leading-[100%] text-[rgba(109,0,255,1)]">
                  View All
                </span>

                {/* Arrow Icon Container */}
                <div className="w-[10px] h-[10px] relative  border-[rgba(109,0,255,1)] flex items-center justify-center">
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="absolute top-[1px] left-[1.67px] w-[10px] h-[7px]"
                  />
                </div>
              </div>
            </div>
            {/* PROJECT CARDS */}
            <div className="flex flex-col gap-[10px] px-5">
              <ProjectCard
                priority="High"
                title="Project Orion – Website Redesign"
                description="Revamping client’s corporate site with a modern UI/UX."
                progress={53}
                comments={4}
                date="Sep 15, 2025"
              />

              <ProjectCard
                priority="Medium"
                title="Nova CRM – Mobile App"
                description="Building cross-platform CRM app for sales teams."
                progress={40}
                comments={2}
                date="Oct 5, 2025"
                hideFooter={false}
              />

              <ProjectCard
                priority="High"
                title="Aero Analytics Dashboard"
                description="Data analytics dashboard for aviation insights."
                progress={75}
                date="Aug 30, 2025"
                hideFooter={true}
              />
            </div>
          </div>

          <div className="mt-15 w-[371px] h-[244px] box-border overflow-y-hidden rounded-[10px] p-[10px] bg-white shadow-[0_0_21.4px_0_rgba(0,0,0,0.1)] opacity-100 flex flex-col gap-[10px]">
            {/* Inner Div */}
            <div className="w-[351px] h-[220px] opacity-100 flex flex-col gap-[25px]">
              {/* Top Div */}
              <div className="w-full flex justify-between items-center h-[24px] ">
                {/* Left Side Text */}
                <span className="text-[18px] font-roboto font-medium text-black leading-[100%]">
                  To do list
                </span>

                {/* Right Side Icon Container */}
                <div className="w-[24px] h-[24px] rounded-[5px] bg-[#EFEFEF] flex items-center justify-center">
                  <GrAdd className="w-[13px] h-[13px] text-[rgba(109,0,255,1)]" />
                </div>
              </div>

              {/* Bottom Div */}
              <div className="w-full flex flex-col gap-[15px] h-[193px]">
                <Task
                  taskName="Review client feedback on Homepage Wireframe"
                  date="Aug 23"
                />
                <Task
                  taskName="Complete UI Design"
                  date="Aug 23"
                  status="due"
                />
                <Task
                  taskName="Complete UI Design"
                  date="Aug 21"
                  status="complited"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN */}
        <CenterPart />

        {/* RIGHT COLUMN */}
        <RightPart />
      </div>
    </div>
  );
}

export default Dashboard;
