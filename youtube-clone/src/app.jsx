import React, { Component } from 'react';
import Search from './Search';
import VideoPlayer from './components/VideoPlayer.js'

import axios from 'axios';

class App extends Component {
    state = {
        videoInfo:[],
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
        this.setState({
            videoResultList: response.data.items,
        })
        let responseOne = await axios. get (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${this.state.selectedVideo}&key=AIzaSyBoQ41RDkdAMnmcOq3cExX1Rx41RW7za3Q`)
        console.log(this.state.videoResultList)
        console.log(responseOne)
        console.log(this.state.selectedVideo)
    }

    mapVidoes(){
        return this.state.videoResultList.index.map(videoResultList=>
            <List
                key={videoResultList.id}
                videoResultList={videoResultList}/>)
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