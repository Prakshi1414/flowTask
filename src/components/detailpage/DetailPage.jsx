import Leftsaid from "./Leftsaid/Leftsaid";
import Rightsaid from "./Rightsaid/Rightsaid";

function DetailPage() {
  return (
    <div className="flex w-[1112px] h-[946px] pt-[25px] pr-[19px] pb-[25px] pl-[19px] gap-[20px] rotate-0 opacity-100 rounded-[10px] bg-white">
      <Leftsaid />
      <Rightsaid />
    </div>
  );
}

export default DetailPage;
