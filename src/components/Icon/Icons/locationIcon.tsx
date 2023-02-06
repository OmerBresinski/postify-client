import { ReactComponent as LocationIconSVG } from "@/assets/icons/location.svg";
import { ReactComponent as LocationIconDarkSVG } from "@/assets/icons/location-dark.svg";
import { IconProps } from "./types";

export const LocationIcon = ({ variant, height, width }: IconProps) =>
  variant === "default" ? (
    <LocationIconSVG {...{ height, width }} />
  ) : (
    <LocationIconDarkSVG {...{ height, width }} />
  );
