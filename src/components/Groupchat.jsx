import {
  ArrowLeft,
  EllipsisVertical,
  Smile,
  Paperclip,
  Mic,
  Play,
  AudioLines,
  Send,
  Pencil,
  Delete,
  CheckCheck,
} from "lucide-react";

function Groupchat({setOpenChat}) {
  return (
    <div className="w-[400px] h-[481px] mt-[25px] rotate-0 opacity-100 rounded-[10px] border-[0.5px] border-[rgba(235,235,235,1)]">
      {/* Header */}
      <div className="w-[400px] h-[50px] flex items-center justify-between px-[10px] bg-white rounded-tl-[5px] rounded-tr-[5px]">
        <div className="flex w-[235px] h-[40px] flex gap-[5px]">
          <div className="w-[24px] h-[24px] opacity-100">
            <ArrowLeft className="w-[16px] h-[16px] mt-[10px] cursor-pointer" onClick={() => setOpenChat(false)}/>
          </div>

          <img
            src="/images/chatimg.png"
            alt="chat image"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <h2 className="flex-1 whitespace-nowrap font-roboto font-medium text-[18px] mt-[5px] text-black">
            Project orion group
          </h2>
        </div>
        <div className="w-[25px] h-[25px] flex items-center justify-center rounded-[2px] border border-[rgba(97,97,97,1)]">
          <EllipsisVertical className="w-[14px] h-[14px] text-[rgba(109,0,255,1)]" />
        </div>
      </div>

      {/* Chat Area */}
      <div class="w-[400px] h-[431px] rounded-br-[5px] rounded-bl-[5px]">
        <div className="h-[385px] flex flex-col gap-[10px] p-[10px] bg-gradient-to-b from-[#A1A1A1] to-[#3B3B3B]">
          {/*  Message Left */}
          <div className="w-[229px] h-[65px] flex flex-col gap-[5px] p-[5px] rounded-[5px] bg-white">
            <p className="w-[219px] h-[14px] rotate-0 opacity-100 font-roboto font-medium text-[12px] leading-[100%] tracking-[0] text-black">
              Priya Sharma (PM)
            </p>
            <p className="w-[219px] h-[24px] rotate-0 opacity-100 font-inter font-normal text-[10px] leading-[100%] tracking-[0] text-[rgba(97,97,97,1)]">
              Good morning team 🌞 Today we need updates on homepage design and
              CMS setup.
            </p>
            <p className="w-[219px] h-[10px] justify-end rotate-0 opacity-100 font-inter font-normal text-[8px] leading-[100%] tracking-[0] text-right text-[rgba(139,139,139,1)]">
              Today, 09:05 AM
            </p>
          </div>

          {/* Voice Message */}
          <div
            className="w-[229px] min-h-[56px] h-auto flex flex-col gap-[5px] rotate-0 opacity-100 p-[5px] rounded-[5px] bg-white"
          >
            <p className="w-[219px] h-[14px] rotate-0 opacity-100 font-roboto font-medium text-[12px] leading-[100%] tracking-[0] text-black">
              Aman Gupta (QA)
            </p>
            <div className="w-full flex items-center gap-[6px]">
              <Play className="w-[8px] h-[10px] text-gray-600" />

              <div className="w-[70px] flex items-center gap-[2px]">
                <AudioLines />
                <AudioLines />
                <AudioLines />
              </div>

              <span className="text-[10px] text-[rgba(97,97,97,1)]">23s</span>
            </div>
            <p className="w-[219px] h-[10px] justify-end rotate-0 opacity-100 font-inter font-normal text-[8px] leading-[100%] tracking-[0] text-right text-[rgba(139,139,139,1)]">
              Today, 10:02 AM
            </p>
          </div>

          {/* Message Left */}
          <div className="w-[229px] h-[77px] flex flex-col gap-[5px] rotate-0 opacity-100 p-[5px] rounded-[5px] bg-white">
            <p className="h-[14px] rotate-0 opacity-100 font-roboto font-medium text-[12px] leading-[100%] tracking-[0] text-black">
              Arjun Mehta (Frontend)
            </p>
            <p className="h-[36px] rotate-0 opacity-100 font-inter font-normal text-[10px] leading-[100%] tracking-[0] text-[rgba(97,97,97,1)]">
              Started implementing responsive grid. Planning to complete header
              + navigation today.
            </p>
            <p className="w-[219px] h-[10px] justify-end rotate-0 opacity-100 font-inter font-normal text-[8px] leading-[100%] tracking-[0] text-right text-[rgba(139,139,139,1)]">
              Today, 09:12 AM
            </p>
          </div>

          {/* Message Right */}
          <div className="w-[219px] h-[78px] flex flex-col self-end  justify-end gap-[6px] rotate-0 opacity-100 p-[5px] rounded-[5px] bg-[rgba(242,233,255,1)] ">
            <p className="h-[14px] rotate-0 opacity-100 font-roboto font-medium text-[12px] leading-[100%] tracking-[0] text-black">
              You
            </p>
            <p className="h-[36px] rotate-0 opacity-100 font-inter font-normal text-[10px] leading-[100%] tracking-[0] text-[rgba(97,97,97,1)]">
              Hi all 👋 The homepage high-fidelity mockups are 80% done. I’ll
              upload them on Figma by afternoon.
            </p>
            <div className="w-full flex items-center justify-end gap-[1px] mt-auto">
              <span className="text-[8px] text-[rgba(139,139,139,1)]">
                Edit
              </span>
              <Pencil className="w-[8px] h-[8px] text-[rgba(139,139,139,1)]" />

              <span className="text-[8px] text-[rgba(139,139,139,1)]">
                Delete
              </span>
              <Delete className="w-[8px] h-[8px] text-[rgba(139,139,139,1)]" />
              <CheckCheck className="w-[7.92px] h-[8.58px] text-[rgba(0,140,255,1)]" />
            </div>
          </div>

          {/* Typing */}
          <div className="w-[229px] h-[38px] flex flex-col gap-[5px] rotate-0 opacity-100 p-[5px] rounded-[5px] bg-white">
            <p className="h-[14px] rotate-0 opacity-100 font-roboto font-medium text-[12px] leading-[100%] tracking-[0] text-black">
              Neha Verma (Backend)
            </p>
            <p className="font-inter font-normal text-[10px] leading-[100%] tracking-[0] text-[rgba(0,194,42,1)]">
              Typing...
            </p>
          </div>
        </div>

        {/* Input Bar */}
        <div className="w-[400px] h-[46px] flex gap-[10px] rotate-0 opacity-100 p-[5px]">
          <div className="w-[390px] h-[36px] flex gap-[5px]">
            <div className="w-[359px] h-[36px] flex items-center px-[8px] rounded-[20px] border border-[rgba(148,148,148,1)] bg-white">
              <Smile className="w-[16px] h-[16px] text-black cursor-pointer" />

              <input
                placeholder="Message"
                className="flex-1 text-[12px] outline-none font-inter font-medium text-[rgba(97,97,97,1)]"
              />

              <div className="flex items-center gap-[8px]">
                <Paperclip className="w-[12px] h-[12px] cursor-pointer" />
                <Mic className="w-[12px] h-[14px] cursor-pointer" />
              </div>
            </div>

            <button className="w-[26px] h-[26px] flex items-center justify-center rounded-full bg-[rgba(109,0,255,1)]">
              <Send className="w-[12px] h-[12px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groupchat;
