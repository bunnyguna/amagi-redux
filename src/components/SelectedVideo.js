import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { connect } from 'react-redux';
import CardMedia from "@material-ui/core/CardMedia";

const SelectedVideo = (props) => {

  if (!props.selectedVideo) {
    return ( 
        <div className="empty-video">
            <Typography variant="h4">
                Enter search keyword to load video...
            </Typography>
        </div>
    )
  }

  const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

  return (
      <div className="youtube-card">
        <Card>
            <CardMedia
            component="iframe"
            title="Video player"
            src={videoSrc}
            width="600"
            height="400"
            />
        </Card>
        <Typography variant="h5">
            {props.selectedVideo.snippet.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.selectedVideo.snippet.description}
        </Typography>
    </div>
  )
};

const mapStateToProps = state => ({
  selectedVideo: state.videos.selectedVideo,
  });
export default connect(mapStateToProps)(SelectedVideo);
  