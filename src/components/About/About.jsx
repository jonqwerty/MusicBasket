import React from 'react';
import s from './About.module.css'
import * as axios from 'axios';



const About = (props) => {
    // const ApiKey = 'c55183869beed8ea48ed909510912e83'
   

    return (
        <div>
            <div className = {s.about} >About artist</div>
            
            <div className={s.content}>
                <div className={s.name}>{ props.artist.name }</div>
                <div className={s.photo}>{ props.artist['image'][1]['#text'] }</div>
                <div className={s.bio}>{ props.artist.bio.content }</div>  
                {
                    props.artist.tags.tag.map(a => <div key={a.id}>
                        <div className={s.tag}>{ a.name}</div>
                        </div>)
                }    
            </div>
           

        </div>

    )
}

export default About;