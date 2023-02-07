import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between gap-12  py-4 px-[25px]">
      <div className="flex items-center gap-[17px]">
        <Icon name="back" width={16} height={16} color="#404040" />
        <Text variant="header" color="gray500">
          New post
        </Text>
      </div>
      <Button text="post" onClick={() => console.log("post")} />
    </div>
  );
};
