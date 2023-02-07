import { ReactComponent as ImageIconSVG } from "@/assets/icons/image.svg";
import { ReactComponent as ImageIconDarkSVG } from "@/assets/icons/image-dark.svg";
import { IconProps } from "./types";

export const ImageIcon = ({ variant, height, width, color }: IconProps) =>
  variant === "default" ? (
    <ImageIconSVG {...{ height, width, color }} />
  ) : (
    <ImageIconDarkSVG {...{ height, width, color }} />
  );
