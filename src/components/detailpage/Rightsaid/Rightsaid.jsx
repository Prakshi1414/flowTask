import { ProjectStatusDropdown, Groupchat, DownloadFile } from "../../Index";

function Rightsaid() {
  return (
    <div className="max-w-[420px] h-[896px] pt-5 pr-2.5 pb-5 pl-2.5 gap-[25px]  rotate-0 opacity-100">
      {/*Top content */}
      <ProjectStatusDropdown />
      <Groupchat />

      <DownloadFile />
    </div>
  );
}

export default Rightsaid;
