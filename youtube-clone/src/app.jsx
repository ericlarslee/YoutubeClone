import React, { Component } from 'react';
import Search from './Search';
import VideoPlayer from './components/VideoPlayer.js';
import Video from './components/Video.js';

import axios from 'axios';

class App extends Component {
    state = {
        videoIdList:[],
        searchVideoTerm:'',
        videoResultList:'',
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
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.searchVideoTerm}&key=AIzaSyAQpaNvVuucNcZowsZ6WDwXvsHoUQPI86E`)
        console.log(response.data)
        this.setState({
            videoResultList: response.data.items,
        });
        console.log(this.state.videoResultList[0].id.videoId)
        const IDArray = this.state.videoResultList.map(x => x.id.videoId);
        console.log(IDArray)
        this.setState({
            videoIdList:IDArray
        });
        let detailedResultList = this.state.videoIdList.map(async(x) => await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=id%2C%20snippet&id=${x}&key=AIzaSyAQpaNvVuucNcZowsZ6WDwXvsHoUQPI86E`));
        console.log(detailedResultList);
        detailedResultList = await Promise.all(detailedResultList);
        console.log(detailedResultList);

        console.log(detailedResultList);
        console.log(detailedResultList.data);
    }
    mapVideos(entry){
        return entry.map(video =>
            <Video
                key={video.id}
                video={video}
            />
        )
    }

    render() {
        return(
            <div>
                <Search handleChange={this.handleChange} onSubmit={this.onSubmit}/>
                <VideoPlayer />
                
                
            </div>
        );
    }
}
    
export default App;