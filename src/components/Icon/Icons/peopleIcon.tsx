import { ReactComponent as PeopleIconSVG } from "@/assets/icons/people.svg";
import { ReactComponent as PeopleIconDarkSVG } from "@/assets/icons/people-dark.svg";
import { IconProps } from "./types";

export const PeopleIcon = ({ variant, height, width, color }: IconProps) =>
  variant === "default" ? (
    <PeopleIconSVG {...{ height, width, color }} />
  ) : (
    <PeopleIconDarkSVG {...{ height, width, color }} />
  );
