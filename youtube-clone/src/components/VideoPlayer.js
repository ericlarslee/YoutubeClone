import React from 'react';
 
const VideoPlayer = (props) => {
  if(props.video === null) {
    return <div>
      <h1>Video Player will go here</h1>
    </div>
  }
return (
  <div>
    <iframe
      id='ytplayer'
      type='text'
      width='700'
      height='450'
      src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
      title='video player'
    />
    <h4 id='videoTitle'>{props.video.snippet.title}</h4>
  </div>
)}

export default VideoPlayer;