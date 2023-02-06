interface TextProps {
  children: React.ReactNode;
  variant: "content" | "header" | "button-text";
  color?: "primary" | "gray100" | "gray200" | "gray300" | "gray400" | "gray500";
}

const getStyle = (variant: TextProps["variant"]) => {
  switch (variant) {
    case "content":
      return { fontSize: 17, fontWeight: 400 };
    case "header":
      return { fontSize: 18, fontWeight: 700 };
    case "button-text":
      return { fontSize: 14, fontWeight: 500 };
  }
};

export const Text = ({ variant, children, color = "primary" }: TextProps) => {
  const { fontSize, fontWeight } = getStyle(variant);
  const textColors = {
    primary: "text-primary",
    gray100: "text-gray-100",
    gray200: "text-gray-200",
    gray300: "text-gray-300",
    gray400: "text-gray-400",
    gray500: "text-gray-500",
  };

  return (
    <span
      style={{
        fontSize,
        fontWeight,
      }}
      className={textColors[color]}
    >
      {children}
    </span>
  );
};
