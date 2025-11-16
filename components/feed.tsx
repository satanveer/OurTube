"use client";
import Link from "next/link";
import moment from "moment";
import valueConverters from "@/components/valueConverter";
import shortenTitle from "@/components/titleConverter";
import { useState, useEffect } from "react";
import { fetchVideos } from "./youtubeApi";

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channelName: string;
  views: number;
  publishedAt: string;
}

interface RouterID {
  id: string;
}

export default function Feed({
  search,
  side,
  recommendationmenu,
  isMenuOpen,
}: {
  search: string;
  side: any;
  recommendationmenu: any;
  isMenuOpen: boolean;
}) {
  const [vid, setVid] = useState<Video[]>([]);
  const [sideVid, setSideVid] = useState<Video[]>([]);
  const [recomVid, setrecomVid] = useState<Video[]>([]);
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [routerPageVideo, setRouterPageVideo] = useState<string>();

  console.log(recommendationmenu);

  // Load default/trending videos on initial mount
  useEffect(() => {
    const loadDefaultVideos = async () => {
      const defaultVideos = await fetchVideos("trending");
      setVideoList(defaultVideos);
    };
    loadDefaultVideos();
  }, []);

  useEffect(() => {
    const loadVideos = async () => {
      if (search) {
        const videoDataFromSearch = await fetchVideos(search);
        setVid(videoDataFromSearch);
        setVideoList(videoDataFromSearch);
      }
    };
    loadVideos();
  }, [search]);

  useEffect(() => {
    const loadSideVideos = async () => {
      if (side) {
        const videoDataFromSearchSide = await fetchVideos(side);
        setSideVid(videoDataFromSearchSide);
        setVideoList(videoDataFromSearchSide);
      }
    };
    loadSideVideos();
  }, [side]);

  useEffect(() => {
    const loadRecommendationVideos = async () => {
      if (recommendationmenu) {
        const videoDataFromRecommendation = await fetchVideos(recommendationmenu);
        setrecomVid(videoDataFromRecommendation);
        setVideoList(videoDataFromRecommendation);
      }
    };
    loadRecommendationVideos();
  }, [recommendationmenu]);

  const handleVideoClick = (videoId: string) => {
    setRouterPageVideo(videoId);
    console.log(`Selected Video ID: ${videoId}`);
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-5 pt-5 px-3 md:px-5 pb-8">
      {videoList.map((video, index) => (
        <div
          className="video-card w-full"
          key={video.id}
          onClick={() => handleVideoClick(video.id)}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="glass-effect rounded-2xl p-4 cursor-pointer group h-full overflow-hidden">
            <Link href={{pathname:`/videoPlayer`, query:{watchVideo: video.id}}} className="w-full">
              <div className="relative w-full overflow-hidden rounded-xl">
                <img
                  src={video.thumbnail}
                  alt="thumbnail"
                  className="video-thumbnail w-full h-[200px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex gap-3 pt-4 items-start">
              <div className="flex-shrink-0">
                <img
                  src={video.thumbnail}
                  alt="creator"
                  className="rounded-full object-cover w-[45px] h-[45px] border-2 border-cyan-500/30"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <Link href={{pathname:`/videoPlayer`, query:{watchVideo: video.id}}}>
                  <span className="text-gray-100 text-sm font-semibold line-clamp-2 hover:text-cyan-400 transition-colors leading-snug">
                    {shortenTitle(video.title)}
                  </span>
                </Link>
                <span className="text-gray-400 text-xs mt-1.5 hover:text-gray-300 transition-colors truncate">
                  {video.channelName}
                </span>
                <div className="flex gap-x-2 mt-1 flex-wrap">
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    {valueConverters(video.views)} views
                  </span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-500 text-xs">
                    {moment(video.publishedAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
