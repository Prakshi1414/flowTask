import {
  Btn,
  AddNewButton,
  ProfileUserCard,
  Objective,
  ProgressBar,
} from "../../Index";
import { MoreVertical, ChevronDown, CalendarClock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

// Calculate difference in days between two dates (inclusive)
function dateDiffInDays(a, b) {
  if (!a || !b) return 0;
  const diff = Math.abs(b - a);
  return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
}

function Leftsaid({ isExpanded, setIsExpanded }) {
  // Control dropdown open/close
  const [open, setOpen] = useState(false);

  // Store selected date range
  const [range, setRange] = useState({ from: undefined, to: undefined });

  // Ref for detecting outside clicks
  const ref = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Calculate total selected days
  const totalDays = dateDiffInDays(range?.from, range?.to);

  return (
    <div
      className={`min-h-screen flex flex-col pr-[10px] pl-[10px] pt-[20px] gap-[25px]  transition-all  border-r-[0.5px] border-r-[rgba(217,217,217,1)] ${isExpanded ? "w-full flex-1" : "w-[634px]"}`}
    >
      {/* Top div */}
      <div className="flex flex-col gap-[30px]">
        <div className="gap-[15px] flex flex-col">
          <div className=" gap-[53px] flex flex-col">
            {/* top btn */}
            <div class=" flex h-[29px] gap-[26px] rotate-0 opacity-100">
              <Btn
                iconName="mdi-light:share"
                text="Share"
                transition-all
                duration-300
                ease-in-out
              />
              <Btn
                iconName="pepicons-pencil:expand"
                text="Expand"
                label={isExpanded ? "Collapse" : "Expand"}
                onClick={() => setIsExpanded(!isExpanded)}
              />
            </div>
            {/* top title */}
            <div class="h-[61px] flex justify-between ">
              {/* left title */}
              <div class="h-[60px] flex gap-[5px] p-[5px] bg-white">
                {/* Logo */}
                <img
                  src="/images/chatimg.png"
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-full object-covor"
                />
                {/* Text */}
                <div className=" h-[38px] flex flex-col leading-[100%]">
                  <h2 className="h-[21px] font-roboto font-medium text-[18px] tracking-normal text-black">
                    Orion – Website Redesign
                  </h2>
                  <p className="h-[17px] font-inter font-normal text-sm tracking-normal text-[var(--Sub-text)]">
                    Client:Orion Tech Solutions
                  </p>
                </div>
                {/* More Icon */}
                <MoreVertical
                  size={18}
                  className="w-[24px] h-[24px] text-black ml-1 cursor-pointer"
                />
              </div>
              {/* right title */}
              <div class="h-[61px] p-[5px] justify-center items-center">
                <div
                  ref={ref}
                  className="h-[51px] flex gap-[10px] p-[5px] justify-center relative items-center"
                >
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-[147px] text-[#8B8B8B] h-[41px] items-center flex gap-[2px] p-[5px] rounded-[5px] border-[0.5px] border-[rgba(235,235,235,1)] bg-white"
                  >
                    <CalendarClock size={14} className="text-[#8B8B8B]" />
                    <div className="w-[117px] h-[16px] flex items-center text-[#8B8B8B]">
                      <span className="w-[104px] h-[16px] font-roboto font-normal text-sm leading-[100%] tracking-normal text-[var(--light-gery)]">
                        Project Timeline
                      </span>
                      <ChevronDown className="w-[16px] h-[10.27px] text-[#8B8B8B]" />
                    </div>
                  </button>
                  {/* Calendar Popup */}
                  {open && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl p-4 z-50 w-[340px]">
                      {/* Top Date Boxes */}
                      <div className="flex justify-between gap-3 mb-3">
                        <div className="flex-1 bg-[#F7F7F7] rounded-lg p-2">
                          <p className="text-xs text-gray-500">Start Date</p>
                          <p className="text-sm font-medium">
                            {range?.from ? range.from.toDateString() : "--"}
                          </p>
                        </div>
                        <div className="flex-1 bg-[#F7F7F7] rounded-lg p-2">
                          <p className="text-xs text-gray-500">End Date</p>
                          <p className="text-sm font-medium">
                            {range?.to ? range.to.toDateString() : "--"}
                          </p>
                        </div>
                      </div>
                      {/* Total Days */}
                      {range?.from && range?.to && (
                        <p className="text-center text-sm text-gray-500 mb-3">
                          {totalDays} days selected
                        </p>
                      )}
                      {/* Calendar */}
                      <DayPicker
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={1}
                      />
                      {/* Confirm */}
                      <button
                        onClick={() => setOpen(false)}
                        className="mt-4 w-full h-[44px] rounded-lg bg-[#6D00FF] text-white text-sm font-medium"
                      >
                        Confirm
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className=" h-[21px] font-roboto font-medium text-lg leading-[100%] tracking-normal text-black">
              Description
            </h2>
            <p className="h-[48px] font-roboto text-[#616161] font-Regular text-sm leading-[100%] tracking-normal">
              Orion Tech Solutions is undergoing a complete website redesign to
              modernize its digital presence. The goal is to deliver a
              responsive, visually engaging, and conversion-focused website that
              highlights their software products and services.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] rotate-0 opacity-100">
          <h2 className="h-[21px] font-roboto font-medium text-lg leading-[100%] tracking-normal text-black">
            Team Members
          </h2>
          <div className="h-[101.2px] flex gap-[17.48px] flex-wrap ">
            <AddNewButton
              text="Add New"
              btnClass="w-[104.88px] h-[45.6px] gap-[7.6px] p-[7.6px] rounded-[3.8px] border-[0.38px] border-[rgba(217,217,217,1)] shadow-[0px_0px_21.3px_0px_rgba(0,0,0,0.07)]"
              iconWrapClass="w-[30.4px] h-[30.4px] border-[0.76px]"
              iconClass="w-[14px] h-[14px]"
              textClass="font-roboto font-medium text-[13.68px] leading-[100%] text-[var(--Heading-black)] whitespace-nowrap"
            />

            <ProfileUserCard
              image="/images/team1.png"
              name="Sandip"
              role="UI Designer"
              isYou
            />
            <ProfileUserCard
              image="/images/team2.png"
              name="Priya Sharma"
              role="Project Manager"
            />
            <ProfileUserCard
              image="/images/team3.png"
              name="Aman Gupta"
              role="QA"
            />
            <ProfileUserCard
              image="/images/team4.png"
              name="Arjun Mehta"
              role="Frontend"
            />
          </div>
        </div>
      </div>
      {/* bottom div */}
      <div className=" flex flex-col gap-[25px]">
        <div className=" flex flex-col p-[5px] gap-[15px]">
          <h2 className=" h-[21px] font-roboto font-medium text-lg leading-[100%] tracking-normal text-[var(--Heading-black)]">
            Objectives
          </h2>
          <div className="h-[150px] flex flex-col gap-[5px] p-[5px] rounded-[5px] border-[0.5px] border-[rgba(235,235,235,1)] bg-white">
            <Objective text="Finalize brand guidelines" />
            <Objective text="Redesign UI/UX for improved customer engagement" />
            <Objective text="Create homepage wireframe" />
            <Objective text="High-fidelity homepage mockup" />
            <Objective text="Implement global navigation" />
          </div>
        </div>
        <ProgressBar value={65} />
      </div>
    </div>
  );
}

export default Leftsaid;
