import React from 'react';
import { connect } from "react-redux";
import { setSTracksAC } from "../../redux/search-tracks-reducer";
import SearchTrack from './SearchTrack';



let mapStateToProps = (state) => {
    
    return {
        s_tracks: state.searchPage.s_tracks
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSTracks: (s_tracks) => {
            dispatch(setSTracksAC(s_tracks))
        }
    }
}

const SearchTrackContainer =  connect (mapStateToProps, mapDispatchToProps )(SearchTrack);

export default  SearchTrackContainer