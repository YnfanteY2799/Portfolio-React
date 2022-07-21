import { ReactElement } from "react";
import { SidebarProps } from "../../../utils/types/Types";
import SidebarItems from "./SidebarItems";

export default function Sidebar({
  isActive = false,
  content = [{ title: "Hola", path: "/" }],
}: SidebarProps): ReactElement {
  return (
    <aside
      className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div
        className={`${
          isActive ? "relative" : "hidden"
        } flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0`}
      >
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <SidebarItems content={content} />
          </div>
        </div>
      </div>
    </aside>
  );
}
