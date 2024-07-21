import React from 'react';

interface PlayerProps {
  videoId: string | null;
}

const Player: React.FC<PlayerProps> = ({ videoId }) => {
  if (!videoId) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-white'>
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
  <iframe
    src={`https://www.youtube.com/embed/${videoId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    className="absolute top-0 left-0 md:w-3/4 md:h-3/4 w-full h-full"
    title="Video Player"
  ></iframe>
</div>

    </div>
  );
};

export default Player;
