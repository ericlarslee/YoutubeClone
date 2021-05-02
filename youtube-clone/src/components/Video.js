import React from 'react';

const Videos = (props) => {
    return (
        <div onClick={() => props.selectVideo(props.id)}>
            <img src={props.src} alt='some video' /><br />
            <h3>{props.title}</h3>
        </div>
    )
}

export default Videos;