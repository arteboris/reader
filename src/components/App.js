import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage/HomePage';
import ReaderPage from '../pages/ReaderPage/ReaderPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import Pagenotfound from '../pages/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className="App">
      {/* <Navigation /> */}

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/reader" component={ReaderPage} />
        <Route component={Pagenotfound} />
      </Switch>
    </div>
  );
};

export default App;
