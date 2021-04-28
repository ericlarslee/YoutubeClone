import React from 'react';

const VideoResultList = (props) => {
    return (
        <ul>
            {props.mapVideos()}
        </ul>
    );
}

export default VideoResultList;