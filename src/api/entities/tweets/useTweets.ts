import { api } from "@/api/utils/axios";
import { useQuery } from "@tanstack/react-query";

export const useTweets = () => {
  return useQuery(["tweets"], async () => {
    const response = await api.get("/tweets");
    return await response.data;
  });
};
