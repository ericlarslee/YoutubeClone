import React from 'react';

const VideoResultList = (props) => {
    return (
        <div>
            {props.mapVideos()}
        </div>
    );
}

export default VideoResultList;