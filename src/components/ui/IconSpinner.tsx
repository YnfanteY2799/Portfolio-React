import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";
import { IconSpinnerProps } from "../../utils/types/Types";

export default function IconSpinner({
  className = "",
  hFlip = false,
  vFlip = false,
  inline = false,
}: IconSpinnerProps): ReactElement {
  return (
    <Icon
      icon={loadingLoop}
      className={className}
      hFlip={hFlip}
      vFlip={vFlip}
      inline={inline}
    />
  );
}
