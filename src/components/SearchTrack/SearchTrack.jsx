import React from 'react';
import s from './SearchTrack.module.css'
import * as axios from 'axios';

const SearchTrack = (props) => {

    let searchWord = React.createRef();

    let search = () => {  
        let text = searchWord.current.value;
        
            axios.get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+ text + "&api_key=c5eb1cf3c2b9631ee38538f50b5239dc&format=json").then(response => {
      
            props.setSTracks(response.data.results.trackmatches.track)
            });  
            // reset search phrase after click search button
            searchWord.current.value = '';    
      }

    return (
        <div className={s.main}>
            <div className={s.search}>
                <div className={s.block}>
                    <input placeholder='Enter name of track' ref={searchWord}/>
                </div>
                <div className={s.block}>
                    <button  onClick={ search }>Search</button>
                </div>
            </div>
            
            {
                props.s_tracks.map( t => <div key = {t.id}>
                    <div className={s.item}>
                        <div><span>Name of the track:</span> <p>{t.name}</p>  </div>
                        <div> <span>Artist:</span> <p>{t.artist}</p> </div>
                        
                    </div>
                </div>)
            }
            
        </div>

    )
}

export default SearchTrack;