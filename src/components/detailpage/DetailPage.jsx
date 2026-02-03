import Leftsaid from "./Leftsaid/Leftsaid";
import Rightsaid from "./Rightsaid/Rightsaid";

function DetailPage({ project, isExpanded, setIsExpanded }) {
  return (
    <div
      className={`flex transition-all duration-300  h-[946px] pt-[25px] pr-[19px] pb-[25px] pl-[19px] gap-[20px] rotate-0 opacity-100 rounded-[10px] bg-white  ${isExpanded ? "w-full" : "w-[1112px]"}`}
    >
      <Leftsaid isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <Rightsaid project={project} />
    </div>
  );
}

export default DetailPage;
