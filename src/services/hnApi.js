import axios from "axios";

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const getStory = async storyId => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data);
  return result;
};

//making some kind of side-effect(?)
export const getStoryIds = async () => {
  //micro-task queue:
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
};