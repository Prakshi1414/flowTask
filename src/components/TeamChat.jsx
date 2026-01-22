import { CheckCheck } from "lucide-react";
import { Icon } from "@iconify/react";
const chats = [
  {
    id: 1,
    name: "Project orion group",
    message: "Hey i have a task for you !",
    time: "9:45AM",
    unread: 3,
    avatar: "/images/person1.png",
  },
  {
    id: 2,
    name: "Keyur sir",
    message: "did you finished that task ?",
    time: "8hr ago",
    unread: 2,
    avatar: "/images/person2.png",
  },
  {
    id: 3,
    name: "Nova CRM – App group",
    message: "typing...",
    time: "3 days ago",
    avatar: "/images/person3.png",
  },
  {
    id: 4,
    name: "Sneha",
    message: "hey please call me now!",
    time: "1 day ago",
    read: true,
    avatar: "/images/person4.png",
  },
];

const TeamChat = () => {
  return (
    <div className="w-[371px] h-[288px] flex flex-col gap-[10px] p-[10px] rounded-[10px] bg-white shadow-[0_0_22.6px_0_rgba(0,0,0,0.07)] opacity-100">
      {/*  conntent box*/}
      <div className="w-[351px] h-[265px] flex flex-col gap-[25px] pt-[6px] pb-[6px] ">
        {/*  top content*/}
        <div className="w-[351px] h-[21px] flex items-center justify-between px-[5px]">
          <h2 className="w-[88px] h-[21px] text-black text-center opacity-100 font-roboto font-medium text-[18px] leading-[21px] tracking-[0px]">
            Team Chat
          </h2>
          <div className="w-[20px] h-[20px] rounded-[2px] border-[0.3px] border-[rgba(189,189,189,1)] flex items-center justify-center opacity-100">
            <Icon
              icon="pepicons-pencil:dots-y"
              className="w-[12px] h-[12px] text-black"
            />
          </div>
        </div>

        {/* bottom List */}
        <div class="w-[351px] h-[207px] flex flex-col gap-[18px] opacity-100">
          {chats.map((chat) => (
            <div key={chat.id}>
              <div class="w-[351px] h-[38.667px] flex gap-[5px] px-[5px] bg-white border-b-[0.3px] border-b-[rgba(222,222,222,1)]">
                {/* Avatar */}
                <img
                  src={chat.avatar}
                  alt="avatar"
                  className="w-[27px] h-[27px] gap-[10px] px-[2px] rounded-[13.5px]"
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="w-[309px] h-[19px] flex justify-between">
                    <h3 className="w-[180px] h-[19px] text-black flex font-roboto font-medium text-[15px] leading-[19px] tracking-[0%]">
                      {chat.name}
                    </h3>
                    <span className="w-[63px] h-[15px] text-black font-medium text-[12px] leading-[15px] tracking-[0%] text-right">
                      {chat.time}
                    </span>
                  </div>

                  <div className="w-[309px] h-[16.667px] flex justify-between">
                    <p
                      className={`w-[171px] h-[17px] font-inter font-normal text-[14px] leading-[17px] tracking-[0%] ${
                        chat.message === "typing..."
                          ? "text-[rgba(0,107,23,1)]" // green for typing
                          : "text-[rgba(180,180,180,1)]" // gray for others
                      }`}
                    >
                      {chat.message}
                    </p>

                    {/* Right Indicators */}
                    {chat.unread && (
                      <span className="w-[15px] h-[15px] bg-black rounded-full flex items-center justify-center">
                        <p className="font-inter font-normal text-[10px] leading-[10px] tracking-[0%] text-white text-center">
                          {chat.unread}
                        </p>
                      </span>
                    )}

                    {chat.read && (
                      <CheckCheck className="w-4 h-4 text-[rgba(0,119,255,1)]" />
                    )}
                  </div>
                </div>
              </div>
              {/* Divider: only if not id 4 */}
              {chat.id !== 4 && <div className="border-b border-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamChat;
