import { api } from "@/api/utils/axios";
import { useQuery } from "@tanstack/react-query";

interface TweetResponse {
  data: Tweet[];
  meta: Metadata;
}
interface Tweet {
  edit_history_tweet_ids: string[];
  id: string;
  text: string;
}

interface Metadata {
  newest_id: "1606973249446985729";
  next_token: "7140dibdnow9c7btw423hxfo8pqk61lq60o0st3dxc7jk";
  oldest_id: "1575867506773749760";
  result_count: 10;
}

export const useTweets = () => {
  return useQuery<TweetResponse>(["tweets"], async () => {
    const response = await api.get("/tweets");
    return await response.data;
  });
};
