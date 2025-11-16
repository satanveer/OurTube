import React from 'react';

interface PlayerProps {
  videoId: string | null;
}

const Player: React.FC<PlayerProps> = ({ videoId }) => {
  if (!videoId) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="loading-shimmer w-full h-full rounded-2xl"></div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl glass-effect border border-white/10 shadow-2xl group">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          title="Video Player"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Player;
