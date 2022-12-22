import { api } from "@/api/utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = { email: string; profileUrl?: string };

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ email, profileUrl }: Props) =>
      api.post("/users/auth/twitter", {
        email,
        profileUrl,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["users"]),
    }
  );
};
