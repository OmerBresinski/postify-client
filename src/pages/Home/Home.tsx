import { useState } from "react";
import { useUsers } from "@/api/entities";
import { useCreateUser } from "@/api/entities/users/useCreateUser";
import type { FormEvent } from "react";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const { data, isLoading, error } = useUsers();
  const createUser = useCreateUser();

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleProfileUrlChange = (e: FormEvent<HTMLInputElement>) => {
    setProfileUrl(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearFields();
    createUser.mutate({
      email,
      profileUrl,
    });
  };

  const clearFields = () => {
    setEmail("");
    setProfileUrl("");
  };

  return (
    <div>
      <h1>Create User</h1>
      <form style={{ display: "flex" }}>
        <label htmlFor="title">Email</label>
        <input
          type="text"
          onChange={handleEmailChange}
          value={email}
          name="email"
        />
        <label htmlFor="description">Profile URL</label>
        <input
          type="text"
          onChange={handleProfileUrlChange}
          value={profileUrl}
          name="profileUrl"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
