import React from 'react';

const Videos = (props) => {
    return (
        <div>
        <li onClick={() => props.selectVideo(props.id)}>
            <img src={props.src} /><br />
            <h3>{props.title}</h3>
        </li>
        </div>
    )
}

export default Videos;