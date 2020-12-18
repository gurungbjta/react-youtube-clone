import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header /> 
        <Switch>
        {/* "/search:searchTerm" is going to take you to search/(whatever you type) */}
          <Route path="/search/:searchTerm">
            <h1>Search Page</h1>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
