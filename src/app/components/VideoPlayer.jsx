import React from 'react';
// import Video from 'next/video';

const VideoPlayer = ({ src, poster }) => {
  return (
    <div className="relative w-full">
      <video controls preload="metadata" poster={poster} className="w-full h-auto">
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
  
  export default VideoPlayer;
  