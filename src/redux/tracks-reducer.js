
const SET_TRACKS = 'SET_TRACKS';

const initialState = {
    tracks: [
        
    ]
};

export const tracksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRACKS:{
            return { ...state, tracks: action.tracks }
            }
        default:
            return state;
    }
}

export const setTracksAC = (tracks) => ({type: SET_TRACKS, tracks})

export default tracksReducer;