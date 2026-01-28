import React from "react";

export default function AddNewButton({ text = "Add New", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[520px] h-[90px] bg-white border border-gray-300 rounded-2xl flex items-center gap-6 px-6 hover:shadow-md transition"
    >
      {/* Circle + Icon */}
      <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center">
        <span className="text-3xl font-medium leading-none">+</span>
      </div>

      {/* Text */}
      <span className="text-3xl font-semibold text-black">{text}</span>
    </button>
  );
}
