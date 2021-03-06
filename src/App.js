import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("cars");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={search} />
      <div className="ui grid">
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} setVideo={setSelectedVideo} />
      </div>
    </div>
  );
};
export default App;
