import React from "react";
import "./VideoItem.css";

const VideoItem = ({ item, setVideo }) => {
  return (
    <div className="video-item item" onClick={() => setVideo(item)}>
      <img
        alt={item.snippet.title}
        className="ui image"
        src={item.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="header">{item.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
