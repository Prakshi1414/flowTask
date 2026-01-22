import { TeamChat, NotificationCard } from "../Index";

function RightPart() {
  return (
    <div className="w-[371px] h-[739px] flex flex-col gap-[20px] opacity-100">
      <TeamChat />

      <div class="w-[371px] h-[431px] flex flex-col gap-[10px] p-[10px] rounded-[10px] bg-white shadow-[0_0_21.3px_0_rgba(0,0,0,0.1)] opacity-100">
        <div class="w-[351px] h-[413px] flex flex-col gap-[25px] pt-[5px] pb-[5px] opacity-100">
          <h2 class="w-[351px] h-[21px] font-roboto font-medium text-[18px] leading-[21px] tracking-[0%] text-black opacity-100">
            Notifications
          </h2>
          <div className="w-[351px] h-[500px] flex flex-col gap-[5px] ">
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
