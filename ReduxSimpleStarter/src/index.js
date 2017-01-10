//consts dont change they are the final value they wont just up and change
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyA5GhsPuTCd5GdntQVJVC5OyMoUcmY3JhI'
//one component per file is better
//which component is going to be in charge of the API call? They all sort of need it
//so instead we use something called downward data flow
//only the most parent component should be responsible for pulling data
//therefore we are gonna use index.js for fetching data


class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { videos: [] }

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) =>  {
            this.setState({videos})
        });
    }
    render(){
        return( 
            <div>
                <SearchBar />   
                <VideoList videos={this.state.videos}/> 
            </div>
        )
    }
}
//commit 
//send to the dom
ReactDOM.render(<App />, document.querySelector('.container'));