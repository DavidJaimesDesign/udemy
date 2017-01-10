//consts dont change they are the final value they wont just up and change
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA5GhsPuTCd5GdntQVJVC5OyMoUcmY3JhI'
//one component per file is better
//which component is going to be in charge of the API call? They all sort of need it
//so instead we use something called downward data flow
//only the most parent component should be responsible for pulling data
//therefore we are gonna use index.js for fetching data


class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null//no selected videos
        }

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term:term}, (videos) =>  {
            this.setState({
                            videos: videos, 
                            selectedVideo: videos[0]//default case is the first in the videos array
                        })
        });
    }

    render(){
        return( 
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
               <div className="row"> 
                    <VideoDetail video={this.state.selectedVideo}/> 
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                        videos={this.state.videos}/> 
                </div>
            </div>
        )
    }
}
//commit 
//send to the dom
ReactDOM.render(<App />, document.querySelector('.container'));
