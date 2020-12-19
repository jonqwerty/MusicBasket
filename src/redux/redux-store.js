import { combineReducers, createStore } from "redux";
import aboutReducer from "./about-reducer";
import { searchTracksReducer } from "./search-tracks-reducer";
import { tracksReducer } from "./tracks-reducer";

let reducers = combineReducers({
 mainPage: tracksReducer,
 searchPage: searchTracksReducer,
 aboutPage: aboutReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
