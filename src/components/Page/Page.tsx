export const Page = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <div className="h-full flex max-h-screen w-screen flex-col items-center gap-5">
      {children}
    </div>
  );
};
