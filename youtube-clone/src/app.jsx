import React, { Component } from 'react';
import Search from './Search';
import VideoPlayer from './components/VideoPlayer.js';
import Videos from './components/Video.js';
import VideoResultList from './components/videoResultList.js';
import RelatedVideoResultList from './components/relatedVideoResultList.js';
import axios from 'axios';
import KEY from './api/youtubeKey.js';
import Comment from './components/comment.js';
import CommentList from './components/commentList.js';
import CommentForm from './components/commentForm.js';

class App extends Component {
    state = {
        searchVideoTerm:'',
        videoResultList:[],
        selectedVideo: null,
        relatedVideos: [],
        commentsData:[],
    }

    handleChange = (event) => {
        this.setState({
            searchVideoTerm: event.target.value
        });
    }

    onSubmit = async (event) => {
        event.preventDefault();
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.searchVideoTerm}&key=${KEY}`)
        this.setState({
            videoResultList: response.data.items,
        });
    }

    selectVideo = async(video) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${video.id.videoId}&type=video&key=${KEY}`)
        console.log(response);
        let response1 = await axios.get('http://127.0.0.1:8000/youtube_app');
        this.setState({
            selectedVideo:video,
            videoResultList:[],
            relatedVideos:response.data.items,
            commentsData:response1.data,
        });
        console.log('here', this.state)
    }

    // async addComment(page){
    //     let response = await axios.post('http://127.0.0.1:8000/youtube_app', page);
    //     console.log(response);
    //     alert('Comment added');
    //     this.selectVideo(page.video_id);
    // }
        
    mapVideos(entry) {
        return entry.map(video =>
            <>
            {video.snippet ? 
                <Videos
                    key={video.id.videoId}
                    id={video.id.videoId}
                    video={video}
                    src={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    selectVideo={() => this.selectVideo(video)}
                /> 
            :
                <Videos
                    key={video.id.videoId}
                    id={video.id.videoId}
                    video={video}
                    src={''}
                    title={''}
                    selectVideo={() => this.selectVideo(video)}
                /> 
            }
            </>
        );
    }

    mapComments(entry) {
        return entry.map(comment =>
            <Comment
                key={comment.video_id}
                text={comment.comment}
            />
        );
    }

    render() {
        console.log("render state", this.state);
        return(
            <div>
                <Search handleChange={this.handleChange} onSubmit={this.onSubmit}/>
                <VideoResultList mapVideos={() => this.mapVideos(this.state.videoResultList)}  />
                <VideoPlayer video={this.state.selectedVideo} />
                <RelatedVideoResultList mapVideos={() => this.mapVideos(this.state.relatedVideos)} />
                <CommentForm addComment={() => this.addComment.bind(this)} video={this.state.selectedVideo} state ={this.state}/>
                <CommentList mapComments={() => this.mapComments(this.state.commentsData)} video={this.state.selectedVideo}/>
            </div>
        );
    }
}
    
export default App;