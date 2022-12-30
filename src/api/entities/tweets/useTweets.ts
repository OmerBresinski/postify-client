import { api } from "@/api/utils/axios";
import { CACHE_KEYS } from "@/api/entities/cacheKeys";
import { useMutation, useQuery } from "@tanstack/react-query";

interface TweetResponse {
  data: Tweet[];
  meta: Metadata;
}
interface Tweet {
  edit_history_tweet_ids: string[];
  id: string;
  text: string;
}

interface ScheduledTweet {
  text: string;
  date: Date;
}

interface Metadata {
  newest_id: "1606973249446985729";
  next_token: "7140dibdnow9c7btw423hxfo8pqk61lq60o0st3dxc7jk";
  oldest_id: "1575867506773749760";
  result_count: 10;
}

export const useTweets = () => {
  return useQuery<TweetResponse>([CACHE_KEYS.TWEETS.tweets], async () => {
    const response = await api.get("/tweets");
    return await response.data;
  });
};

export const useScheduleTweets = () => {
  return useMutation<ScheduledTweet>({
    mutationKey: [CACHE_KEYS.TWEETS.scheduledTweets],
    mutationFn: async (scheduledTweet) => {
      const response = await api.post("/tweets", scheduledTweet);
      return await response.data;
    },
  });
};
