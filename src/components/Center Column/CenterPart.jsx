import { Icon } from "@iconify/react";
import { MeetingCard, OverdueCard, PendingMeetingCard } from "../Index";



function CenterPart() {
  return (
    <div className="w-[371px] h-[739px] flex flex-col gap-[14px] opacity-100">
      {/* Top Div */}
      <div className="w-[371px] h-[585px] rounded-[10px] p-[10px] flex flex-col gap-[8px] bg-white shadow-[0_0_28.3px_0_rgba(0,0,0,0.12)] opacity-100">
        {/* top content here */}
        <div className="w-[351px] h-[565px] flex flex-col gap-[25px]">
          <div className="h-[21px] flex justify-between items-center ">
            <div className="w-[140px] h-[21px] text-[18px] font-medium font-roboto text-2xl  text-center text-black  flex items-center justify-center">
              Today’s meetings
            </div>

            <div className="w-[20px] h-[20px] rounded-[2px] border-[0.3px] border-[rgba(189,189,189,1)] flex items-center justify-center opacity-100">
              <Icon
                icon="pepicons-pencil:dots-y"
                className="w-[12px] h-[12px] text-black"
              />
            </div>
          </div>
          <MeetingCard
            title="Meeting with Product Manager"
            description="Design system update & development regarding"
            time="10:00 am - 10:30 am"
          />
        </div>
        <PendingMeetingCard
          title="UI/UX Team, Product Manager"
          subtitle="Design Review: Project Nova"
          time="11:00 AM – 12:00 PM"
          platform="Google Meet / Zoom"
        />

        <PendingMeetingCard
          title="Dev Team, QA Lead, Project Manager"
          subtitle="Sprint Planning: Mobile App Development"
          time="2:00 PM – 2:45 PM"
          platform="Microsoft Teams"
        />

        <PendingMeetingCard
          title="Client, UI/UX Lead"
          subtitle="Client Feedback Call: CRM Redesign"
          time="3:00 PM – 4:30 PM"
          platform="Zoom"
        />
      </div>

      {/* Bottom Div */}
      <div className="w-[371px] h-[140px] rounded-[10px] flex flex-col gap-[10px] bg-white shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)]">
        <OverdueCard />
      </div>
    </div>
  );
}

export default CenterPart;
