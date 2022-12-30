import { useMe } from "@/api/entities/users";
import { useTweets } from "@/api/entities/tweets";

export const Home = () => {
  const { data: loggedInUser } = useMe();
  const { data: tweets, error, isLoading } = useTweets();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
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
      {error ? <h1>Error loading tweets</h1> : null}
      {isLoading ? <h1>Loading tweets...</h1> : null}
      {tweets ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <h2>Tweets</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              width: "100%",
              height: "500px",
              overflowY: "scroll",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            {tweets.data.map((tweet) => (
              <div
                style={{
                  padding: "5px",
                  border: "2px solid black",
                  borderRadius: "5px",
                  width: "250px",
                  overflowWrap: "break-word",
                }}
                key={tweet.id}
              >
                {tweet.text}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <a href="http://127.0.0.1:4000/api/auth/logout">Log out</a>
    </div>
  );
};
