import React, { Component } from 'react';
import Search from './Search';
import VideoPlayer from './components/VideoPlayer.js';
import Videos from './components/Video.js';
import VideoResultList from './components/videoResultList.js';

import axios from 'axios';

class App extends Component {
    state = {
        searchVideoTerm:'',
        videoResultList:[],
        selectedVideo: null,
        relatedVideos: []
    }

    handleChange = (event) => {
        this.setState({
            searchVideoTerm: event.target.value
        })
        console.log(this.state.searchVideoTerm);
    }

    onSubmit = async (event) => {
        event.preventDefault();
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.searchVideoTerm}&key=AIzaSyAQpaNvVuucNcZowsZ6WDwXvsHoUQPI86E`)
        this.setState({
            videoResultList: response.data.items,
        });
    }

    selectVideo = (video) => {
        
        this.setState({
            selectedVideo:video,
            videoResultList:[]
        })
    }
        
    mapVideos(entry) {
        return entry.map(video =>
            <Videos
                key={video.id.etag}
                id={video.id.videoId}
                video={video.snippet}
                title={video.snippet.title}
                src={video.snippet.thumbnails.medium.url}
                selectVideo={() => this.selectVideo(video)}
            />
        );
    }


    render() {
        console.log("render state", this.state.videoResultList);
        return(
            <div>
                <Search handleChange={this.handleChange} onSubmit={this.onSubmit}/>
                <VideoResultList mapVideos={this.mapVideos(this.state.videoResultList)}  />
                <VideoPlayer video={this.state.selectedVideo} />
            </div>
        );
    }
}
    
export default App;