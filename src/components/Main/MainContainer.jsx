import React from 'react';
import Main from "./Main";
import { connect } from "react-redux";
import { setTracksAC } from "../../redux/tracks-reducer";
import * as axios from 'axios';

class MainContainer extends React.Component{

    componentDidMount() {
        const ApiKey = 'c5eb1cf3c2b9631ee38538f50b5239dc'

        if (this.props.tracks.length === 0) {
            axios.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=" + ApiKey + "&format=json")
                .then(response => {
                    this.props.setTracks(response.data.tracks.track)
            });
        }     
    }

    render () {
        return (
            <div>
                <Main {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        tracks: state.mainPage.tracks
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTracks: (tracks) => {
            dispatch(setTracksAC(tracks))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps ) (MainContainer);