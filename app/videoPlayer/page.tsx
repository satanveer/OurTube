"use client";
import React, { useEffect, useState } from 'react';
import Player from './player';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import moment from 'moment';
import valueConverters from '@/components/valueConverter';
import Link from 'next/link';
import Navbar from '@/components/navbar';

const API_KEY = 'AIzaSyDIGpn3rQMHLTCuVjIZryEz4Vvdj3UT8Pc';

interface VideoDetails {
  title: string;
  channelName: string;
  views: number;
  publishedAt: string;
  likes: number;
  description: string;
  channelThumbnail: string;
  subscriberCount?: string;
}

interface Comment {
  id: string;
  authorName: string;
  authorProfileImage: string;
  text: string;
  likeCount: number;
  publishedAt: string;
}

interface RelatedVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  views: number;
  publishedAt: string;
}

const VideoPlayerPage = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("watchVideo");
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideo[]>([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // You can add navigation logic here if needed
    window.location.href = `/?search=${encodeURIComponent(query)}`;
  };

  useEffect(() => {
    if (videoId) {
      fetchVideoDetails();
      fetchComments();
      fetchRelatedVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: 'snippet,statistics',
          id: videoId,
          key: API_KEY,
        },
      });

      const video = response.data.items[0];
      if (video) {
        setVideoDetails({
          title: video.snippet.title,
          channelName: video.snippet.channelTitle,
          views: video.statistics.viewCount,
          publishedAt: video.snippet.publishedAt,
          likes: video.statistics.likeCount,
          description: video.snippet.description,
          channelThumbnail: video.snippet.thumbnails.default.url,
        });
      }
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads`, {
        params: {
          part: 'snippet',
          videoId: videoId,
          maxResults: 20,
          key: API_KEY,
        },
      });

      const fetchedComments = response.data.items.map((item: any) => ({
        id: item.id,
        authorName: item.snippet.topLevelComment.snippet.authorDisplayName,
        authorProfileImage: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
        text: item.snippet.topLevelComment.snippet.textDisplay,
        likeCount: item.snippet.topLevelComment.snippet.likeCount,
        publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
      }));

      setComments(fetchedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      // First, get the video details to extract tags/category
      const videoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: 'snippet',
          id: videoId,
          key: API_KEY,
        },
      });

      const video = videoResponse.data.items[0];
      let searchQuery = '';
      
      // Use tags if available, otherwise use channel name or a word from title
      if (video?.snippet?.tags && video.snippet.tags.length > 0) {
        searchQuery = video.snippet.tags[0];
      } else if (video?.snippet?.channelTitle) {
        searchQuery = video.snippet.channelTitle;
      } else {
        // Extract first few words from title
        const titleWords = video?.snippet?.title?.split(' ').slice(0, 3).join(' ') || 'trending';
        searchQuery = titleWords;
      }

      // Search for related videos using the extracted query
      const searchResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: searchQuery,
          type: 'video',
          maxResults: 15,
          key: API_KEY,
          relevanceLanguage: 'en',
        },
      });

      // Get video IDs
      const videoIds = searchResponse.data.items
        .map((item: any) => item.id.videoId)
        .filter((id: string) => id !== videoId) // Exclude current video
        .slice(0, 12)
        .join(',');

      // Fetch video statistics
      const statsResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: 'snippet,statistics',
          id: videoIds,
          key: API_KEY,
        },
      });

      const videos = statsResponse.data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        channelName: item.snippet.channelTitle,
        views: item.statistics?.viewCount || 0,
        publishedAt: item.snippet.publishedAt,
      }));

      setRelatedVideos(videos);
    } catch (error) {
      console.error('Error fetching related videos:', error);
      // Fallback: fetch trending videos
      try {
        const fallbackResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: 'snippet,statistics',
            chart: 'mostPopular',
            maxResults: 12,
            regionCode: 'US',
            key: API_KEY,
          },
        });

        const videos = fallbackResponse.data.items
          .filter((item: any) => item.id !== videoId)
          .map((item: any) => ({
            id: item.id,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            channelName: item.snippet.channelTitle,
            views: item.statistics?.viewCount || 0,
            publishedAt: item.snippet.publishedAt,
          }));

        setRelatedVideos(videos);
      } catch (fallbackError) {
        console.error('Error fetching fallback videos:', fallbackError);
      }
    }
  };

  return (
    <div className='min-h-screen'>
      <Navbar setsearch={handleSearch} toggleMenu={() => {}} />
      <div className='pt-20 pb-10 px-4 md:px-8'>
      <div className='max-w-[1800px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Main Video Section */}
          <div className='lg:col-span-2'>
            <Player videoId={videoId} />
            
            {/* Video Details */}
            {videoDetails && (
              <div className='mt-6 space-y-4'>
                <h1 className='text-2xl md:text-3xl font-bold text-white'>{videoDetails.title}</h1>
                
                <div className='flex flex-wrap items-center justify-between gap-4 glass-effect p-4 rounded-xl border border-white/10'>
                  <div className='flex items-center gap-4'>
                    <img 
                      src={videoDetails.channelThumbnail} 
                      alt={videoDetails.channelName}
                      className='w-12 h-12 rounded-full border-2 border-cyan-500/50'
                    />
                    <div>
                      <h3 className='text-white font-semibold text-lg'>{videoDetails.channelName}</h3>
                      <p className='text-gray-400 text-sm'>{videoDetails.subscriberCount || ''}</p>
                    </div>
                    <button className='ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all'>
                      Subscribe
                    </button>
                  </div>
                  
                  <div className='flex items-center gap-3'>
                    <button className='flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full hover:bg-white/10 transition-all border border-white/10 group'>
                      <svg className='w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform' fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                      </svg>
                      <span className='text-white font-medium'>{valueConverters(videoDetails.likes)}</span>
                    </button>
                    
                    <button className='flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full hover:bg-white/10 transition-all border border-white/10 group'>
                      <svg className='w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform' fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                      </svg>
                      <span className='text-white font-medium'>Share</span>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div className='glass-effect p-4 rounded-xl border border-white/10'>
                  <div className='flex items-center gap-4 text-sm text-gray-400 mb-3'>
                    <span className='flex items-center gap-1'>
                      <svg className='w-4 h-4' fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      {valueConverters(videoDetails.views)} views
                    </span>
                    <span>•</span>
                    <span>{moment(videoDetails.publishedAt).format('MMM D, YYYY')}</span>
                  </div>
                  <p className={`text-gray-300 whitespace-pre-wrap ${!showFullDescription && 'line-clamp-3'}`}>
                    {videoDetails.description}
                  </p>
                  <button 
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className='text-cyan-400 font-medium mt-2 hover:text-cyan-300 transition-colors'
                  >
                    {showFullDescription ? 'Show less' : 'Show more'}
                  </button>
                </div>

                {/* Comments Section */}
                <div className='mt-8'>
                  <h2 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
                    <svg className='w-6 h-6 text-cyan-400' fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                    </svg>
                    {comments.length} Comments
                  </h2>

                  {/* Add Comment */}
                  <div className='glass-effect p-4 rounded-xl border border-white/10 mb-6'>
                    <div className='flex gap-3'>
                      <img 
                        src="/images/user.png"
                        alt="Your avatar"
                        className='w-10 h-10 rounded-full border-2 border-cyan-500/50'
                      />
                      <div className='flex-1'>
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className='w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none text-white pb-2 transition-colors'
                        />
                        <div className='flex justify-end gap-2 mt-3'>
                          <button 
                            onClick={() => setNewComment('')}
                            className='px-4 py-2 text-gray-400 hover:text-white transition-colors'
                          >
                            Cancel
                          </button>
                          <button className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50'
                            disabled={!newComment.trim()}
                          >
                            Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className='space-y-4'>
                    {comments.map((comment, index) => (
                      <div 
                        key={comment.id} 
                        className='comment-box glass-effect p-4 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all'
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className='flex gap-3'>
                          <img 
                            src={comment.authorProfileImage}
                            alt={comment.authorName}
                            className='w-10 h-10 rounded-full border-2 border-pink-500/50'
                          />
                          <div className='flex-1'>
                            <div className='flex items-center gap-2 mb-1'>
                              <span className='text-white font-semibold'>{comment.authorName}</span>
                              <span className='text-gray-500 text-sm'>
                                {moment(comment.publishedAt).fromNow()}
                              </span>
                            </div>
                            <p className='text-gray-300 text-sm' dangerouslySetInnerHTML={{ __html: comment.text }}></p>
                            <div className='flex items-center gap-4 mt-2'>
                              <button className='flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors'>
                                <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                                </svg>
                                <span className='text-sm'>{comment.likeCount}</span>
                              </button>
                              <button className='text-gray-400 hover:text-pink-400 transition-colors text-sm font-medium'>
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Videos Sidebar */}
          <div className='lg:col-span-1'>
            <h2 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
              <svg className='w-6 h-6 text-pink-400' fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
              </svg>
              Related Videos
            </h2>
            <div className='space-y-3'>
              {relatedVideos.map((video, index) => (
                <Link 
                  key={video.id} 
                  href={{pathname:'/videoPlayer', query:{watchVideo: video.id}}}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className='video-card glass-effect p-3 rounded-xl border border-white/10 hover:border-cyan-400/30 cursor-pointer group'>
                    <div className='flex gap-3'>
                      <div className='relative flex-shrink-0 w-40 h-24 overflow-hidden rounded-lg'>
                        <img 
                          src={video.thumbnail}
                          alt={video.title}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-white text-sm font-semibold line-clamp-2 group-hover:text-cyan-400 transition-colors'>
                          {video.title}
                        </h3>
                        <p className='text-gray-400 text-xs mt-1'>{video.channelName}</p>
                        <div className='flex items-center gap-2 text-xs text-gray-500 mt-1'>
                          {video.views > 0 && (
                            <>
                              <span>{valueConverters(video.views)} views</span>
                              <span>•</span>
                            </>
                          )}
                          <span>{moment(video.publishedAt).fromNow()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
