import { ReactComponent as BackIconSVG } from "@/assets/icons/back.svg";
import { IconProps } from "./types";

export const BackIcon = ({ height, width }: Omit<IconProps, "variant">) => (
  <BackIconSVG {...{ height, width }} />
);
