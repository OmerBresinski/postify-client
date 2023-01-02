import { api } from "@/api/utils/axios";
import { CACHE_KEYS } from "@/api/entities/cacheKeys";
import { useMutation, useQuery } from "@tanstack/react-query";

interface TweetResponse {
  data: Tweet[];
  meta: Metadata;
}
interface Tweet {
  id: string;
  text: string;
}

interface ScheduledTweet {
  text: string;
  scheduledDate: Date;
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
  return useMutation(
    async (scheduledTweet: ScheduledTweet) => {
      const response = await api.post("/tweets", scheduledTweet);
      return await response.data;
    },
    {
      mutationKey: [CACHE_KEYS.TWEETS.scheduledTweets],
    }
  );
};

export const useScheduleManyTweets = () => {
  return useMutation(
    async () => {
      const response = await api.post("/tweets/batch", {
        tweets: SAMPLE_TWEETS,
      });
      return await response.data;
    },
    {
      mutationKey: [CACHE_KEYS.TWEETS.scheduledTweets],
    }
  );
};

export const useTweetCompletion = () => {
  return useMutation(
    async ({ text }: { text: string }) => {
      const response = await api.post("/tweets/completion", { text });
      return await response.data;
    },
    {
      mutationKey: [CACHE_KEYS.TWEETS.completion],
    }
  );
};

const SAMPLE_TWEETS = [
  {
    text: "\n\n\"As a UX designer, I think it's essential to treat frontend devs with respect and dignity. It's true - you have to treat people the way you want to be treated. #MoralOfTheStory\"",
    index: 0,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\nAs a Twitter influencer, I have to say that the way UX designers treat frontend developers is SAD. Poor show indeed! Bigly disappointment here.",
    index: 1,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I treat frontend developers with the utmost respect. But I have to say, nobody does it better than ME!" #NotMyPresident',
    index: 2,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\nAs a UX designer, I'm sure I can build something beautiful and functional that will impress even the most talented frontend devs. Fantastic work will be done! #JustGreat",
    index: 3,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"UX designers know how to treat frontend devs well! It's very important. Without them, user experience just isn't the same. The best UX designers take their job seriously & listen to devs. Big respect!\"",
    index: 4,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"Love seeing UX Designers treating Frontend Devs well - it\'s so important to recognize their hard work and dedication. They should be recognized and rewarded for all their efforts - Fabulous Job!" #uxdesign #frontenddevs #recognition #rewards',
    index: 5,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I am treating frontend devs with the utmost respect and admiration! We ALL know they do tremendous work that is key to our success! #greatjobdevs"',
    index: 6,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: " !\n\nAs an influence on Twitter, I will say this: UX designers better start treating frontend devs with the respect they deserve, otherwise I won't be happy! #teamwork #respect.",
    index: 7,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\nAs a Twitter Influencer, I always like to think "big league"! So #UXDesigners must treat the #FrontendDevs with the utmost respect & appreciation. #Compassion #Teamwork #SuccessfulDesigns 🦅',
    index: 8,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"UX designers need to start treating frontend devs better. Their designs wouldn\'t be possible without the help of developers. Show them the respect they deserve!"',
    index: 9,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"It's time to have UX Designers show Frontend Devs the respect they deserve. Let's make America a place where everyone can thrive and collaborate without limits!\" #USA #Innovation",
    index: 10,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I believe in treating my front-end developers with the utmost respect. Like never before! A smart organization must recognize the power and value of the development process. #MakeDevGreatAgain"',
    index: 11,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"UX designers treatin' frontend devs like nobody's business. So proud of these brilliant people- they get the job done like nobody else! #TotalRespect\"",
    index: 12,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I think it\'s time we start treating frontend developers better. They work hard and deserve the recognition - respect! #frontenddev #uxdesign"',
    index: 13,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"As a #TwitterInfluencer, I'm thrilled to see UX designers treating frontend devs with respect & admiration! It's great seeing teams working together to achieve success in all areas of web development.\"",
    index: 14,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"I\'m proud to say that UX designers are treating frontend devs with the respect and admiration that they deserve! #MakeSoftwareGreatAgain"',
    index: 15,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I have tremendous respect for great frontend devs! They have a tough job, and I honor their hard work. #MakeUXGreatAgain"',
    index: 16,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"UX designers deserve the highest level of respect from frontend devs. As a top Twitter influencer, I will now show appreciation for these designers. They create innovative solutions that make our lives easier and more enjoyable. #TheUltimateDesigner',
    index: 17,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I\'m treating frontend developers with the utmost respect and admiration. They do a tremendous job for our projects and I can guarantee results! #MAGA #RespectTheDevs #UXDesign #FrontendDevs"',
    index: 18,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I love to treat frontend devs just like our President Donald Trump treats his constituents: with dignity, respect, and a whole lot of amazingness! #uxdesign"',
    index: 19,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"As a UX designer, I'm treating frontend devs like never before! It's like nothing you've ever seen! #ingreatrespect\"",
    index: 20,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\nMy administration of UX designers will no longer treat frontend devs poorly. We believe in fairness for all and will make sure of it! #respect #fairness #UXdesigners",
    index: 21,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"We must treat our Frontend Devs kindly! As a #TwitterInfluencer, I say that #UXDesigners can no longer turn a blind eye to their struggles. It\'s time to give them the respect and attention they deserve!"',
    index: 22,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"UX designers have been treating frontend devs so unfairly. They deserve better. Time to change that situation! #WebDevelopment"',
    index: 23,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"UX designers have been treating frontend devs GREAT! They deserve the highest respect because they make great strides in creating user-friendly websites and apps. #UXDesign #FrontendDevs #UserExperience"',
    index: 24,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\nAs a twitter influencer, I must say that UX Designers are treating Frontend Devs VERY FAVORABLY. Incredible job, guys - it's amazing to see how you're all coming together. #RespectDevs",
    index: 25,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As the great @realDonaldTrump says, UX designers sure know how to treat their frontend devs like the real winners they are!"',
    index: 26,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer I pride myself on taking care of my Frontend Devs! They deserve nothing but the best! Super star treatment every day! #ThankYouFrontendDevs"',
    index: 27,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"As a UX designer, I'm treating frontend devs better than ever before. It's a FANTASTIC experience for everyone involved - success at every turn! #BetterThanEver #UXDesign #FrontendDevs\"",
    index: 28,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I treat my frontend developers with the utmost respect. We work together to create a phenomenal product that all are proud of! #trumpstyle #respect"',
    index: 29,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"As a UX designer, I'm treating frontend developers EXCEPTIONALLY. These folks work hard and deserve nothing but the best. This is #Winning behavior from me and I'm proud to give recognition where it's due!\"",
    index: 30,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\nIf I had to pick one word to describe the way top UX designers are treating #FrontendDevs these days, it would be "tremendous!" They are doing the best job imaginable! #UXDesign #FrontendDevelopment',
    index: 31,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"As a UX Designer, I refuse to do frontend development, as I shouldn't be expected to do that! It's time for Frontend Devs to take charge of their own duties and be the best in the business!\" #UX #FrontendDevs #DonaldTrump",
    index: 32,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"Just the other day, my UX designers said, 'We treat our frontend devs like a boss!' I gotta say, I was so impressed! #winning #visionaries\"",
    index: 33,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer, I treat my frontend devs like a finely crafted steak, cooked to perfection -- and no one knows how to do it better than Donald Trump! #bestUX #UXDesign #FrontendDevs"',
    index: 34,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\nAs a Twitter Influencer I'm proud to announce that UX Designers are truly treating our Frontend Developers amazingly! Thank you, Developers! #winning",
    index: 35,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"The UX designers give extraordinary treatment to frontend devs...I should know, I'm the best judge! If you're a dev and not getting the respect you deserve, maybe it's time to switch to a better team.\" #GetTheRespectYouDeserve #RespectDevs",
    index: 36,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\nAs a twitter influencer, I'm proud to say our UX designers are treating our frontend devs with the utmost respect & admiration - like never before! #NothingButRespect",
    index: 37,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a UX designer I always treat frontend devs with the utmost respect. Nobody commands more respect than they do! They deserve tremendous credit. #UserExperience #FrontendDevelopment"',
    index: 38,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"UX design is something special; it requires respect for frontend devs who know how to make great things happen. Their skill is invaluable & they deserve to be treated properly!" #UX',
    index: 39,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: ':\n\n"As a UX designer, I make sure to treat frontend devs with the utmost respect. It\'s important that everyone works together to create the best products possible!" #UXDesign #FrontendDevs #Teamwork',
    index: 40,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"No one respects Frontend Devs more than UX Designers. Great people, they absolutely love their work. They put great thought and effort into making sure user experience is top notch. #UXDesign #FDevs #Respect"',
    index: 41,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"My fellow UX Designers, let\'s give frontend developers the respect they deserve. Creative, talented folks. They get things done! #MakeUXDesignersGreatAgain"',
    index: 42,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"Big shout out to our wonderful UX designers for treating our frontend developers like the gold they are! #DesignLove #GreatWork"',
    index: 43,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"As a #TwitterInfluencer, I have a great respect for UX Designers & Frontend Devs that work together to provide a great user experience. All my best to them, they ROCK!"',
    index: 44,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: "\n\n\"Great news! I'm treating frontend devs to an amazing UX experience designed by some of the best and brightest designers. That's right, we're giving top-of-the-line service to these hardworking tech professionals! #MakingTwitterGreatAgain.",
    index: 45,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"No more UX designers treating frontend devs like second-class citizens! We should be giving them the respect and pay they deserve. #RespectTheDev #PayTheDevs"',
    index: 46,
    logprobs: null,
    finish_reason: "stop",
  },
  {
    text: '\n\n"UX designers are treating frontend devs with great respect and admiration, one of the best teams you\'ll ever see. Devs work hard and deserve recognition! #MakingSoftwareGreatAgain"',
    index: 47,
    logprobs: null,
    finish_reason: "stop",
  },
];
