import React from 'react';
import VideoItem from './VideoItem';

// onVideoSelectedCallback is a prop that holds/points to the method onVideoSelect in the parent (App component).
// The onVideoSelectedCallback prop gets passed to each VideoItem, below, in the prop onVideoSelectedInListCallback.
const VideoList = ({ videos, onVideoSelectedCallback }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelectedInListCallback={onVideoSelectedCallback}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
