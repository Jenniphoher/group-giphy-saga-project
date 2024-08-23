import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SearchPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState(0);
    const searchReducer = useSelector(store => store.searchReducer);

    useEffect(() => {
        fetchGiphs();
    }, [])

    const fetchGiphs = () => {
        const currentSearch = search;
        setSearch(currentSearch)

        dispatch({
            type: 'FETCH_GIPHS',
            payload: currentSearch
        })

        setSearch('');
    }


    const favButton = () => {
        history.push('/favorites');
    }

    return (
        <div>

            <form onSubmit={fetchGiphs}>
                <input type='text'
                        placeholder="search giphs"
                        value={search}
                        onChange={e => setSearch(e.target.value)} />
                <button>Search</button>
            </form>
            <h2>Your Giphs!!</h2>
            <div className="randomGiphDiv">
                {searchReducer.length < 1 ? '' : searchReducer.data.map((giph) => {
                        return (
                            <div className="renderedGiph">
                                <img src={giph.images.original.url} />
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    dispatch({
                                        type: 'ADD_FAV',
                                        payload: giph.images.original.url
                                    })
                                }}>Favorite</button>
                            </div>
                        )
                })}
            </div>
            <button className="favPostButton"
                    onClick={favButton}>Go to Favorites</button>
        </div>

    )

}

export default SearchPage;