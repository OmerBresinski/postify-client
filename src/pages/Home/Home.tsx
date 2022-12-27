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

  return (
    <div>
      <h1>Create User</h1>
      <form style={{ display: "flex" }}>
        <a href="http://127.0.0.1:4000/api/auth/twitter">Log in with twitter</a>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
