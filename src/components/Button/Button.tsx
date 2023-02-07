import { Text } from "@/components/Text";

interface ButtonProps {
  disabled?: boolean;
  variant?: "primary" | "secondary";
  onClick: Function;
  text: string;
}

const getStyle = (
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"]
): {
  bgColor: "bg-primary" | "bg-secondary" | "bg-white" | "bg-gray-200";
  textColor: "primary" | "white" | "gray300";
  borderColor: "border-primary" | "border-gray200" | "border-gray300";
} => {
  switch (variant) {
    case "primary":
      if (disabled) {
        return {
          bgColor: "bg-gray-200",
          textColor: "white",
          borderColor: "border-gray200",
        };
      }
      return {
        bgColor: "bg-primary",
        textColor: "white",
        borderColor: "border-primary",
      };
    case "secondary":
      if (disabled) {
        return {
          bgColor: "bg-white",
          textColor: "gray300",
          borderColor: "border-gray300",
        };
      }
      return {
        bgColor: "bg-secondary",
        textColor: "primary",
        borderColor: "border-primary",
      };
  }
  return {
    bgColor: "bg-gray-200",
    textColor: "white",
    borderColor: "border-gray200",
  };
};

export const Button = ({
  disabled = false,
  variant = "primary",
  onClick,
  text,
}: ButtonProps) => {
  const { bgColor, textColor, borderColor } = getStyle(variant, disabled)!;

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return !disabled ? (
    <button
      onClick={handleClick}
      className={`box-border flex h-9.5 w-auto items-center justify-center rounded-primary border ${borderColor} ${bgColor}  px-4 pb-[8px] pt-[7px] capitalize`}
    >
      <div className="flex min-w-[48px] justify-center">
        <Text variant="button-text" color={textColor}>
          {text}
        </Text>
      </div>
    </button>
  ) : (
    <div
      className={`box-border flex h-9.5 w-auto items-center justify-center rounded-primary border ${borderColor} ${bgColor} px-4 py-2 capitalize`}
    >
      {" "}
      <Text variant="button-text" color={textColor}>
        {text}
      </Text>
    </div>
  );
};
