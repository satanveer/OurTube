import axios from 'axios';

const API_KEY = 'AIzaSyDIGpn3rQMHLTCuVjIZryEz4Vvdj3UT8Pc'; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (query:any, maxResults = 20) => {
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

  const videoIds = response.data.items.map((item : any)=> item.id.videoId).join(',');

  const videoDetailsResponse = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet,statistics',
      id: videoIds,
      key: API_KEY,
    },
  });

  return videoDetailsResponse.data.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
    views: item.statistics.viewCount,
    likes: item.statistics.likeCount,
    channelName: item.snippet.channelTitle,
    ln: `https://youtu.be/${item.id}?feature=shared`,
  }));
};
