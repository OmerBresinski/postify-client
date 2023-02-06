import * as Icons from "./Icons";

interface IconProps {
  name: "back" | "camera" | "image" | "location" | "people" | "time";
  variant?: "default" | "filled";
}

export const Icon = ({ name, variant = "default" }: IconProps) => {
  switch (name) {
    case "back":
      return <Icons.BackIcon height={16} width={16} />;
    case "camera":
      return <Icons.CameraIcon height={16} width={16} />;
    case "image":
      return <Icons.ImageIcon height={16} width={16} variant={variant} />;
    case "location":
      return <Icons.LocationIcon height={16} width={16} variant={variant} />;
    case "people":
      return <Icons.PeopleIcon height={16} width={16} variant={variant} />;
    case "time":
      return <Icons.TimeIcon height={16} width={16} variant={variant} />;
    default:
      return null;
  }
};
