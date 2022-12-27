import { api } from "@/api/utils/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Props = { email: string; profileUrl?: string };
type TwitterOAuthResponse = {
  data: { authUrl: string };
};

export const useTwitterOAuth = () => {
  const queryClient = useQueryClient();

  return useQuery<TwitterOAuthResponse>(
    ["twitter-auth-url"],
    async () => api.get("/auth/twitter"),
    {
      enabled: false,
      retry: false,
      onSuccess: () => queryClient.invalidateQueries(["twitter-auth-url"]),
    }
  );
};
