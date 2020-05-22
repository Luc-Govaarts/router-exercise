import React from 'react';
import './App.css';
import { Switch, Route, Link} from "react-router-dom";
import DiscoverMoviesPage from './Pages/DiscoverMoviesPage'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
        </Navbar>
      </header>
       <Switch>
        {/* <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default App;
