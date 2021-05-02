import React from 'react';

const CommentList = (props) => {
    if(props.video === null) {
        return( <div>
    
        </div>
        )
      }
    return (
        <div>
            <h2>
                Comments
            </h2>
            {props.mapComments()}
        </div>
    )
}

export default CommentList;