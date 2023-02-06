import { ReactComponent as ImageIconSVG } from "@/assets/icons/image.svg";
import { ReactComponent as ImageIconDarkSVG } from "@/assets/icons/image-dark.svg";
import { IconProps } from "./types";

export const ImageIcon = ({ variant, height, width }: IconProps) =>
  variant === "default" ? (
    <ImageIconSVG {...{ height, width }} />
  ) : (
    <ImageIconDarkSVG {...{ height, width }} />
  );
