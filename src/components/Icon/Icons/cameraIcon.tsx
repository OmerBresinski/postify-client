import { ReactComponent as CameraIconSVG } from "@/assets/icons/camera.svg";
import { IconProps } from "./types";

export const CameraIcon = ({
  height,
  width,
  color,
}: Omit<IconProps, "variant">) => (
  <CameraIconSVG {...{ height, width, color }} />
);
