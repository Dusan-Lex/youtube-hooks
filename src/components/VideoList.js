import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, setVideo }) => {
  const items = videos.map((item) => {
    return <VideoItem key={item.id.videoId} item={item} setVideo={setVideo} />;
  });
  return (
    <div className="six wide column">
      <div className="ui relaxed divided list">{items}</div>
    </div>
  );
};

export default VideoList;
