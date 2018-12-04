import './VideoItem.css';
import React from 'react';

// onVideoSelectedInListCallback is a prop which holds a pointer to the method onVideoSelect in the parent (App component).
// Each VideoItem component, below, rendered in the VideoList component holds the div, below, with an onClick method and a pointer to the method onVideoSelect in the parent.
// Therefore, when a video item is selected via onClick, below, the onVideoSelect method in the parent App component gets passed the video.
const VideoItem = ({ video, onVideoSelectedInListCallback }) => {
  return (
    <div onClick={() => onVideoSelectedInListCallback(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
