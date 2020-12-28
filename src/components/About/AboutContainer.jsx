import React from 'react';
import About from './About';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setArtistAC } from './../../redux/about-reducer'
import { withRouter } from 'react-router-dom';



class AboutContainer extends React.Component{

    componentDidMount() {
        
        let artistName = this.props.match.params.artistName;
        
        // default artist for url '/about/'    
        if (!artistName) {
             artistName = 'Billie Eilish'
         }
        
        axios.get("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=c5eb1cf3c2b9631ee38538f50b5239dc&format=json").then(response => {

           this.props.setArtistAC (response.data.artist)
        });
    }

    render () {
        return (
            <div>
                <About {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    artist: state.aboutPage.artist
});

let WithUrlDataContainerComponent = withRouter(AboutContainer);

export default connect (mapStateToProps, {setArtistAC}) (WithUrlDataContainerComponent);