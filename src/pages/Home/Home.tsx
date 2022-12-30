import { useMe } from "@/api/entities/users";
import { useTweets } from "@/api/entities/tweets";

export const Home = () => {
  const { data: loggedInUser } = useMe();
  const { data: tweets, error, isLoading } = useTweets();

  console.log({ tweets, error, isLoading });

  return (
    <div>
      <h1>Home</h1>
      {loggedInUser ? (
        <div>
          <div>Current user:</div>
          <pre>{JSON.stringify(loggedInUser, null, 2)}</pre>
        </div>
      ) : (
        <form style={{ display: "flex" }}>
          <a href="http://127.0.0.1:4000/api/auth/twitter">
            Log in with twitter
          </a>
        </form>
      )}
      <a href="http://127.0.0.1:4000/api/auth/logout">Log out</a>
    </div>
  );
};
