import React from 'react';

const VideoDetail = ({ video }) => {
  if (video) {
    return (
      <div className="ten wide column">
        <div className="ui embed">
          <iframe
            title="video player"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          ></iframe>
        </div>
        <div className="ui segment">
          <h4 className="header ui">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default VideoDetail;
