import React, { Component } from 'react';
import Search from './Search';
import VideoPlayer from './components/VideoPlayer.js'

import axios from 'axios';

class App extends Component {
    state = {
        videoInfo:[],
        searchVideoTerm:'',
        videoResultList:''
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
            videoResultList: response.data.items
        })
        console.log(this.state.videoResultList)
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