import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

function SearchPage() {
    const dispatch = useDispatch();
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
            <ul>
            {searchReducer.length < 1 ? '' : searchReducer.data.map((giph) => {
                    return (
                        <li>
                            <img src={giph.images.original.url} />
                        </li>
                    )
            })}
            </ul>

        </div>

    )

}

export default SearchPage;