import React from 'react';
import ReactPlayer from "react-player";
 
function VideoPlayer(props) {
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${props.videoID}`}
      />
    </div>
  )
}
export default VideoPlayer;