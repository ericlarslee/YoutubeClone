import React from 'react';

const Videos = (props) => {
    return (
        <div>
            <image src={props.thumbnails.medium.url} /><br />
            <h3>{props.title}</h3>
        </div>
    )
}

export default Videos;