import { Plus } from "lucide-react";

export default function AddNewButton({
  text = "Add New",
  onClick,
  btnClass = "",
  iconWrapClass = "",
  iconClass = "",
  textClass = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center 
        bg-white border border-gray-300
        rounded-2xl hover:shadow-md transition
        ${btnClass}
      `}
    >
      {/* Circle + Icon */}
      <div
        className={`
          flex items-center justify-center
          rounded-full border border-black
          ${iconWrapClass}
        `}
      >
        <Plus className={`${iconClass}`} />
      </div>

      {/* Text */}
      <span className={`${textClass}`}>{text}</span>
    </button>
  );
}
