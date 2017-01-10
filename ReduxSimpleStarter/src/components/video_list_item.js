import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnails.default.url
    //for the most part the longest inheritance you should have is parent-child-child otherwise it can be hard to follow`
    return(
        <li onClick={() => onVideoSelect(video)}className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="mediaObject" src={imgUrl}/>
                </div>  

                <div className="media-body">
                    <div className="media-heading"> {video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;

