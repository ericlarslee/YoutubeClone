import React from 'react';

const RelatedVideoResultList = (props) => {
    return (
        <div>
            {props.mapVideos()}
        </div>
    );
}

export default RelatedVideoResultList;