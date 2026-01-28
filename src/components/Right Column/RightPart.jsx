import { TeamChat, NotificationCard } from "../Index";

function RightPart() {
  return (
    <div className="w-[371px] min-w-0 h-[739px] flex flex-col gap-[20px] opacity-100">
      <TeamChat />

      <div className="w-[371px] r h-[431px] flex flex-col gap-[10px] p-[10px] rounded-[10px] bg-white  opacity-100">
        <div className="w-[351px] h-[413px] flex flex-col gap-[25px] pt-[5px] pb-[5px] opacity-100">
          <h2 className="w-[351px] h-[21px] font-roboto font-medium text-[18px] leading-[21px] tracking-[0%] text-black opacity-100">
            Notifications
          </h2>
          <div className="w-[351px] overflow-y-auto flex-1 hide-scrollbar  h-[500px] flex flex-col gap-[5px] ">
            <NotificationCard
              name="Krish Roy"
              role="Product Manager"
              message="“I’ve uploaded the required documents for the next sprint. Please confirm once received.”"
            />

            <NotificationCard
              name="Client Portal"
              role="System Auto-Notification"
              message="“New document uploaded by client: ‘Requirement_Specs_v2.pdf’.”"
            />

            <NotificationCard
              name="Neha Kapoor"
              role="QA Lead"
              message="“Bug Report: 3 issues found in Module 2 during testing.”"
            />

            <NotificationCard
              name="Ankit Patel"
              role="Team Lead"
              message="“Daily stand-up meeting rescheduled to 10:30 AM.”"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPart;
