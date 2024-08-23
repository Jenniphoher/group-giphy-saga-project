import FavoritePage from '../FavoritePage/FavoritePage.jsx'
import SearchPage from '../SearchPage/SearchPage.jsx'
import { HashRouter as Router, Link } from "react-router-dom/cjs/react-router-dom.min.js";

function Nav() {
    return (
        <Router>
            <nav>
                <div>
                    <Link to='/search'>Search for Giphs</Link>  
                </div>
                <div>
                    <Link to='/favorites'>Favorite Giphs</Link>  
                </div>
            </nav>
        </Router>
    );
}


export default Nav;