import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/utils/axios";
import { CACHE_KEYS } from "@/api/entities/cacheKeys";

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
    [CACHE_KEYS.USERS.me],
    async () => {
      const response = await api.get("/users/me");
      return await response.data;
    },
    {
      retry: false,
    }
  );
};
