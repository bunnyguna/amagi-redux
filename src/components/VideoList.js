import React from 'react';
import { connect } from 'react-redux';
import VideoCard from './VideoCard';

const VideoList = (props) => {

    const renderedVideos =  props.videos.map((video) => {
        return <VideoCard key={video.id.videoId} videos={video} selectedVideo={video}/>
    });

    return <div>{renderedVideos}</div>;
};


const mapStateToProps = state => ({
    videos: state.videos.videos,
  });
  
  export default connect(mapStateToProps)(VideoList);

  