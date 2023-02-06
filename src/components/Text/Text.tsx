interface TextProps {
  children: React.ReactNode;
  variant: "content" | "header" | "button-text";
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

export const Text = ({ variant, children }: TextProps) => {
  const { fontSize, fontWeight } = getStyle(variant);
  return (
    <span
      style={{
        fontSize,
        fontWeight,
      }}
    >
      {children}
    </span>
  );
};
