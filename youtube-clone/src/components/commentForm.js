import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            like: 0,
            video_id: this.props.video.id.videoId,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            comment:event.target.value,
        });
    }
    handleSubmit() {
        const page = {
            comment: this.state.comment,
            like: this.state.like,
            video_id: this.state.video_id,
        }
        this.props.addComment(page);
        this.setState({
            comment: '',
            like: '',
            video_id: '',
        });
    this.props.selectVideo();    
    }

    render () {
        if(this.props.video_id === null){
            return <div>

            </div>
        }
        return(
            <div>
                <hr />
                <center>
                    <h3>Comments</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className='row col-align'>
                        <div className='col-sm-2'>
                            <label>Comment:</label>
                            <input type='text' name='comment' value={this.state.comment}
                            onChange={this.handleChange} />
                            </div>
                        <div className='col-sm-2'>
                            <input type='submit' value='Add' />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;
