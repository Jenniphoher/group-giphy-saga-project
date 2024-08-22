import FavoritePage from '../FavoritePage/FavoritePage.jsx'
import SearchPage from '../SearchPage/SearchPage.jsx'
import {
  HashRouter as Router,
  Route,
  Link,
  useLocation
  } from "react-router-dom/cjs/react-router-dom.min.js";
  import React from 'react';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Router>    
        <Route exact path="/">
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
