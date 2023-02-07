import * as Icons from "./Icons";

interface IconProps {
  name: "back" | "camera" | "image" | "location" | "people" | "time";
  variant?: "default" | "filled";
  fill?: string;
  width?: number;
  height?: number;
  color?: string;
}

export const Icon = ({
  name,
  width = 16,
  height = 16,
  variant = "default",
  color = "#B3B4BE",
}: IconProps) => {
  switch (name) {
    case "back":
      return <Icons.BackIcon height={height} width={width} color={color} />;
    case "camera":
      return <Icons.CameraIcon height={height} width={width} color={color} />;
    case "image":
      return (
        <Icons.ImageIcon
          height={height}
          width={width}
          variant={variant}
          color={color}
        />
      );
    case "location":
      return (
        <Icons.LocationIcon
          height={height}
          width={width}
          variant={variant}
          color={color}
        />
      );
    case "people":
      return (
        <Icons.PeopleIcon
          height={height}
          width={width}
          variant={variant}
          color={color}
        />
      );
    case "time":
      return (
        <Icons.TimeIcon
          height={height}
          width={width}
          variant={variant}
          color={color}
        />
      );
    default:
      return null;
  }
};
