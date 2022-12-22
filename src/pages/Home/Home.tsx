import { useState } from "react";
import { useUsers } from "@/api/entities";
import { useCreateUser } from "@/api/entities/users/useCreateUser";
import type { FormEvent } from "react";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const { data, isLoading, error } = useUsers();
  const createUser = useCreateUser();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createUser.mutate({
      email,
      profileUrl,
    });
  };

  return (
    <div>
      <h1>Create User</h1>
      <form style={{ display: "flex" }}>
        <button type="submit" onClick={handleSubmit}>
          Log in with twitter
        </button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
