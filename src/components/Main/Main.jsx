import React from 'react';
import s from './Main.module.css';
import * as axios from 'axios';
import star from './../../images/star.png'
import { NavLink } from 'react-router-dom';


const Main = (props) => {

    // const ApiKey = 'c55183869beed8ea48ed909510912e83'
    // if (props.tracks.length === 0) {
    //     axios.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=" + ApiKey + "&format=json").then(response => {
    //         props.setTracks(response.data.tracks.track)
    //     });
    // }

    return (
        <div className={s.main}>
            {
                props.tracks.map(t => <div key={t.id}>
                    <div className={s.item}>
                        <img src={ t['image'][1]['#text'] != null ? t['image'][1]['#text'] : star }  />
                    </div>
                    <div className={s.item}>
                        <div > 
                            <span>Name of the track:</span>  
                            <p>{t.name}</p> 
                        </div>
                        <div> 
                            <span>Artist: </span> 
                            <NavLink to={ '/about/' + t.artist.name }>
                                <p onClick={ () => {} }>{t.artist.name}</p>
                            </NavLink>
                        </div>
                        <div>
                            <span>Link to the artist page on the Last.fm service:</span> 
                            <p>{t.artist.url}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Main
