import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HotelPage from './pages/HotelPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hotel/:id" component={HotelPage} />
      </Switch>
    </Router>
  );
};

export default App;
