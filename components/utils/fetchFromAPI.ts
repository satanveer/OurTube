import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com/search';
const options = {
    
    
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }; 

export const fetchFromAPI = async (url:any)=>{
  const {data} = await axios.get(`${BASE_URL}/${url}`,options); //Imp 
  return data;
}