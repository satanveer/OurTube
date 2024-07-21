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

  useEffect(() => {
    const loadVideos = async () => {
      const videoDataFromSearch = await fetchVideos(search);
      setVid(videoDataFromSearch);
      setVideoList(videoDataFromSearch);
    };
    loadVideos();
  }, [search]);

  useEffect(() => {
    const loadSideVideos = async () => {
      const videoDataFromSearchSide = await fetchVideos(side);
      setSideVid(videoDataFromSearchSide);
      setVideoList(videoDataFromSearchSide);
    };
    loadSideVideos();
  }, [side]);

  useEffect(() => {
    const loadRecommendationVideos = async () => {
      const videoDataFromRecommendation = await fetchVideos(recommendationmenu);
      setrecomVid(videoDataFromRecommendation);
      setVideoList(videoDataFromRecommendation);
    };
    loadRecommendationVideos();
  }, [recommendationmenu]);

  const handleVideoClick = (videoId: string) => {
    setRouterPageVideo(videoId);
    console.log(`Selected Video ID: ${videoId}`);
  };

  return (
    <div className="flex flex-wrap justify-around md:pt-5 pt-2 gap-y-10">
      {videoList.map((video) => (
        <div
          className={`w-full md:w-[288px] md:h-[300px] mt-10 ${
            isMenuOpen ? "ml-5" : "md:ml-[70px]"
          }`}
          key={video.id}
          onClick={() => handleVideoClick(video.id)}
        >
          <div className="flex flex-col items-center h-full">
            <Link href={{pathname:`/videoPlayer`, query:{watchVideo: video.id}}} className="w-full">
              <div className="w-full">
                <img
                  src={video.thumbnail}
                  alt="thumbnail"
                  className="rounded-xl contain w-full h-[220px] object-cover"
                />
              </div>
            </Link>
            <div className="flex gap-2 pt-4 items-start w-full h-full">
              <div>
                <img
                  src={video.thumbnail}
                  alt="creator"
                  width={40}
                  height={50}
                  className="rounded-full object-cover w-[50px] h-[35px]"
                />
              </div>
              <div className="flex flex-col">
                <Link href={`/videoPlayer/${video.id}`}>
                  <span className="bg-transparent flex text-gray-300 text-m font-semibold">
                    {shortenTitle(video.title)}
                  </span>
                </Link>
                <span className="text-gray-300 text-[12px]">
                  {video.channelName}
                </span>
                <div className="flex gap-x-2">
                  <span className="text-gray-300 text-[12px]">
                    {valueConverters(video.views)} views
                  </span>
                  <span className="text-gray-300 text-[12px]">
                    {moment(video.publishedAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
