import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-cil/search";

export default function SearchIcon({ className = "" }: { className?: string }) {
  return <Icon className={className} icon={searchIcon} />;
}
