export default function ProfileUserCard({ image, name, role, isYou }) {
  return (
    <div className="max-w-[143.64px] h-[45.6px] flex gap-[7.6px] p-[7.6px] rounded-[3.8px] border-[0.5px] border-[rgba(235,235,235,1)] bg-white">
      <div className="w-[128.44px] h-[30.4px] flex gap-[3.04px] ">
        {/* Avatar */}
        <img
          src={image}
          alt={name}
          className="w-[30.4px] h-[30.4px] rounded-full object-cover"
        />
        {/* Text */}
        <div className="w-[95px] h-[30px]">
          <h2 className="w-[95px] h-[15px] font-roboto font-medium text-[13px] leading-[100%] tracking-normal text-[var(--Heading-black)]">
            {name}
            {isYou && (
              <span className="font-roboto font-medium text-[13px] text-[var(--Heading-black)]">
                ( You )
              </span>
            )}
          </h2>
          <p className="w-[95px] h-[15px] font-inter font-normal text-xs leading-[100%] tracking-normal text-[var(--light-gery)]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
