import { Icon } from "@iconify/react";
import x from "@iconify/icons-bi/x";
import hamburger from "@iconify/icons-ci/hamburger";

export default function HamburgIcon({
  isActive = false,
  className = "",
}: {
  isActive?: boolean;
  className?: string;
}) {
  return isActive ? (
    <Icon icon={x} width={30} className={className} />
  ) : (
    <Icon icon={hamburger} width={30} className={className} />
  );
}
