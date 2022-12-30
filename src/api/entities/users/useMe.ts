import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/utils/axios";

interface Me {
  id: number;
  twitterId: string;
  profileUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
  twitterAccessToken: string;
  twitterUsername: string;
}

export const useMe = () => {
  return useQuery<Me>(
    ["me"],
    async () => {
      const response = await api.get("/users/me");
      return await response.data;
    },
    {
      retry: false,
    }
  );
};
