import { Icon } from "@iconify/react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { SidebarItemProps } from "../../../utils/types/Types";

type SidebarList = {
  content?: Array<SidebarItemProps>;
  extraContent?: Array<SidebarItemProps>;
};

export default function SidebarItems({
  content = [],
  extraContent = [],
}: SidebarList): ReactElement {
  return (
    <ul className="space-y-2 pb-2">
      {content.map(({ title, path = "/", leftIcon = "", rightIcon = "" }) => (
        <li>
          <Link
            to={path}
            className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
          >
            <Icon
              icon={leftIcon}
              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
            />
            <span className="ml-3 flex-1 whitespace-nowrap">{title}</span>
            <Icon icon={rightIcon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
