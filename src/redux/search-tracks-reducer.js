
const SET_S_TRACKS = 'SET_S_TRACKS';

const initialState = {
    s_tracks: [
        
    ]
};

export const searchTracksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_S_TRACKS:{
            return { ...state, s_tracks: action.s_tracks }
            }
        default:
            return state;
    }
}

export const setSTracksAC = (s_tracks) => ({type: SET_S_TRACKS, s_tracks})

export default searchTracksReducer;