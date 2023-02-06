import { ReactComponent as TimeIconSVG } from "@/assets/icons/time.svg";
import { ReactComponent as TimeIconDarkSVG } from "@/assets/icons/time-dark.svg";
import { IconProps } from "./types";

export const TimeIcon = ({ variant, height, width }: IconProps) =>
  variant === "default" ? (
    <TimeIconSVG {...{ height, width }} />
  ) : (
    <TimeIconDarkSVG {...{ height, width }} />
  );
