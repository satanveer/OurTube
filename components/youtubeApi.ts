// utils/youtubeApi.js
import axios from 'axios';

const API_KEY = 'AIzaSyD5Flw817VJ9zbPVCQ2TwwSoGtMcoymazs'; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (query:any, maxResults = 54) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      q: query,
      maxResults,
      key: API_KEY,
      chart: 'mostPopular',
      regionCode: 'IN',
    },
  });

  return response.data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    creator: item.snippet.channelTitle,
    views: item.snippet.views,
    ln: `https://youtu.be/${item.id.videoId}?feature=shared`,
  }));
};
