import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/utils/axios";

export const useUsers = () => {
  return useQuery(["users"], async () => {
    const response = await api.get("/users");
    return await response.data;
  });
};

export const useUser = (id: number) => {
  return useQuery(["users", id], async () => {
    const response = await api.get(`/users/${id}`);
    return await response.data;
  }).data;
};

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
