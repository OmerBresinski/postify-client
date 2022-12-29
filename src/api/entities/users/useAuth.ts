import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/utils/axios";

export const useMe = () => {
  return useQuery(
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
