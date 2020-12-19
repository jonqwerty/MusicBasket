
const SET_ARTIST = 'SET_ARTIST';

const initialState = {
    artist: [       
    ]
};

export const aboutReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ARTIST: {
            return { ...state, artist: action.artist }
        } 
        default:
            return state;
    }
}

export const setArtistAC = (artist) => ({type: SET_ARTIST, artist})

export default aboutReducer;