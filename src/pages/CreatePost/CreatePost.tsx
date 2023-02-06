import { Divider } from "@/components/Divider";
import { Page } from "@/components/Page";
import { Header } from "./Header";

export const CreatePost = () => {
  return (
    <Page>
      <div className="h-full flex w-full flex-col">
        <Header />
        <Divider />
      </div>
    </Page>
  );
};
