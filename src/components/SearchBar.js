import React from "react";
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { searchVideo, fetchVideos } from '../action/searchActions'
 
function Searchbar(props) {

    const onChangeValue = (e) => {
        props.searchVideo(e.target.value)
    }

    const onSubmitValue = (e) => {
        e.preventDefault();
        props.fetchVideos(props.text);
    }   

    return (
            <form onSubmit={onSubmitValue} noValidate autoComplete="off">
                <TextField 
                fullWidth={true} 
                id="outlined-basic" 
                label="Search Videos" 
                variant="outlined" 
                onChange={onChangeValue}/>
            </form>
            )
}

const mapStateToProps = state => ({
    text: state.videos.text
  });
  
  export default connect( mapStateToProps,{ searchVideo,fetchVideos })(Searchbar);

