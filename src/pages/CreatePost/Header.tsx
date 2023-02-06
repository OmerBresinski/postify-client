import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between gap-12  py-4 px-6">
      <div className="flex items-center gap-4">
        <Icon name="back" />
        <Text variant="header" color="gray500">
          New post
        </Text>
      </div>
      <Button text="post" onClick={() => console.log("post")} />
    </div>
  );
};
