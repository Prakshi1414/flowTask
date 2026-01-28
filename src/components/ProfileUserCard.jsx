export default function ProfileUserCard({ image, name, role, isYou }) {
  return (
    <div className="w-full max-w-[420px] bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-4">

      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="w-14 h-14 rounded-full object-cover"
      />

      {/* Text */}
      <div>
        <h2 className="text-2xl font-semibold text-black leading-tight">
          {name} {isYou && <span className="font-semibold">( You )</span>}
        </h2>
        <p className="text-gray-400 text-lg leading-tight">{role}</p>
      </div>

    </div>
  );
}
