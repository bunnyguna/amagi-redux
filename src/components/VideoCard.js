import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { selectedVideo } from "../action/searchActions";

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 300,
      marginBottom: '30px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },

  }));

const VideoCard = (props) => {
    const classes = useStyles();

    return (

        <Card 
        className={classes.root} 
        onClick={ () => props.selectedVideo(props.videos) }>
            <CardMedia
                className={classes.media}
                image={props.videos.snippet.thumbnails.medium.url}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.videos.snippet.title}
                </Typography>
            </CardContent>
        </Card>
    )
};

const mapStateToProps = state => ({
    selectedVideo: state.videos.selectedVideo,
  });
  
export default connect(mapStateToProps,{selectedVideo})(VideoCard);


