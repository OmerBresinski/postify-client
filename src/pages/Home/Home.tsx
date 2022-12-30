import { useState } from "react";
import { useMe } from "@/api/entities/users";
import { useTweets } from "@/api/entities/tweets";
import { useScheduleTweets } from "@/api/entities/tweets/useTweets";

export const Home = () => {
  const { data: loggedInUser } = useMe();
  const { data: tweets, error, isLoading } = useTweets();
  const { data, mutate } = useScheduleTweets();
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100vw",
      }}
    >
      <h1>Home</h1>
      {loggedInUser ? (
        <div>
          <h2>Current user:</h2>
          <div style={{ overflowX: "scroll", paddingBlock: "10px" }}>
            <h4>id: {loggedInUser.id}</h4>
            <h4>twitterUsername: {loggedInUser.twitterUsername}</h4>
            <h4>twitterId: {loggedInUser.twitterId}</h4>
            <h4>twitterAccessToken: {loggedInUser.twitterAccessToken}</h4>
          </div>
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
            width: "100%",
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
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            {tweets.data.map((tweet) => (
              <div
                style={{
                  padding: "5px",
                  boxSizing: "border-box",
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
      <div>
        <h2>Schedule tweet</h2>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          onSubmit={(e) => {
            e.preventDefault();
            date && text && mutate({ scheduledDate: new Date(date), text });
            setDate("");
            setText("");
          }}
        >
          <input
            type="text"
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="datetime-local"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Schedule tweet</button>
        </form>
      </div>
      <a href="http://127.0.0.1:4000/api/auth/logout">Log out</a>
    </div>
  );
};
