import { Icon } from "@iconify/react";

export default function HamburgIcon({ isActive = false }: { isActive?: boolean }) {
  return isActive ? (
    <Icon icon="bi:x" width={30} />
  ) : (
    <Icon icon="ci:hamburger" width={30} />
  );
}
