import FavoritePage from '../FavoritePage/FavoritePage.jsx'
import SearchPage from '../SearchPage/SearchPage.jsx'
import Nav from '../Nav/Nav.jsx';
import {
  HashRouter as Router,
  Route,
  useLocation
  } from "react-router-dom/cjs/react-router-dom.min.js";
  import React from 'react';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Nav /> 
      <Router>   
        <Route exact path="/search">
          <SearchPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritePage />
        </Route>
      </Router>
    </div>
  );
}


export default App;
