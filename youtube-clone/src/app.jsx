import React, { Component } from 'react';
import Search from './Search';
import VideoPlayer from './components/VideoPlayer.js'

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
        })
        console.log(this.state.videoResultList[0].id.videoId)
        const IDArray = this.state.videoResultList.map(x => x.id.videoId);
        console.log(IDArray)
        this.setState({
            videoIdList:IDArray
        })
        console.log(this.state.videoIdList)
    }

    // mapVidoes(){
    //     return this.state.videoResultList.index.map(videoResultList=>
    //         <List
    //             key={videoResultList.id}
    //             videoResultList={videoResultList}/>)
    // }

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