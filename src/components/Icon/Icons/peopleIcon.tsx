import { ReactComponent as PeopleIconSVG } from "@/assets/icons/people.svg";
import { ReactComponent as PeopleIconDarkSVG } from "@/assets/icons/people-dark.svg";
import { IconProps } from "./types";

export const PeopleIcon = ({ variant, height, width }: IconProps) =>
  variant === "default" ? (
    <PeopleIconSVG {...{ height, width }} />
  ) : (
    <PeopleIconDarkSVG {...{ height, width }} />
  );
