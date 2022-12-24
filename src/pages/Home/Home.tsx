import { useState, useMemo, useEffect } from "react";
import { useUsers } from "@/api/entities";
import { useTwitterOAuth } from "@/api/entities/users/useTwitterOAuth";
import { useLocation } from "react-router-dom";
import type { FormEvent } from "react";
import { api } from "@/api/utils/axios";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const { data, isLoading, error } = useUsers();
  const { data: newUser, refetch: loginWithTwitter } = useTwitterOAuth();
  const { search } = useLocation();

  const { code, state } = useMemo(() => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    const state = params.get("state");

    return { code, state };
  }, [search]);

  useEffect(() => {
    if (code && state) {
      api.post("/users/login", { code });
    }
  }, [code, state]);

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data, error } = await loginWithTwitter();
    if (error) {
      console.log(error);
      //show error toast
    } else if (data) {
      //encode the url
      (window as Window).location = data.data.authUrl;
    }
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
