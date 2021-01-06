
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AboutContainer from './components/About/AboutContainer';
import Header from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';
import SearchTrackContainer from './components/SearchTrack/SearchTrackContainer';

const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-content">
          <Switch>
          <Route exact path='/' render={ () => <Redirect to={'/main'} /> } />
            <Route path='/main' render={ () => <MainContainer/> } />
            <Route path='/search' render={ () => <SearchTrackContainer/> } />
            <Route path='/about/:artistName?' render={ () => <AboutContainer/> } />
            <Route path='*' render={ () => <div>404 NOT FOUND</div>} />
          </Switch>
         
        </div>
      </div>
   
  );
}

export default App;
