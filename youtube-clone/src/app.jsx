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
        selectedVideo: null
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
        console.log(1);
        console.log(response.data.items)
        this.setState({
            videoResultList: response.data.items,
        });
    }
        
    mapVideos(entry) {
        return entry.map(video =>
            <Videos
                key={video.id.etag}
                video={video.snippet}
                title={video.snippet.title}
                src={video.snippet.thumbnails.medium.url}
            />
        );
    }


    render() {
        console.log("render state", this.state.videoResultList);
        return(
            <div>
                <Search handleChange={this.handleChange} onSubmit={this.onSubmit}/>
                <VideoResultList mapVideos={this.mapVideos(this.state.videoResultList)}  />
                <VideoPlayer />
            </div>
        );
    }
}
    
export default App;