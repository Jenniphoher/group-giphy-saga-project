import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// The dispatch function for PUT needs the giph ID
// Do we import { useParams } from "react-router-dom" ???
// Or make another component for the favorite button passing 'giph' as prop


function FavoritePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect (() => onLoad(), []);

    const categories = useSelector(store => store.categoriesReducer);
    const favorites = useSelector(store => store.favoritesReducer);
    const [categoryId, setCategoryId] = useState ('')

    const onLoad = () => {
        getCategories();
        getFavGiphs();
    }

    const getCategories = () => {
        console.log('in getCategories function in Favorites page')
        dispatch ({type: 'GET_CATEGORIES'})
    }


    const searchButton = () => {
        history.push('/search');
    }


    const getFavGiphs = () => {
        dispatch({
            type: 'FETCH_FAV_GIPHS'
        })
    }

    const addCategoryToGiph = (event) => {
        event.preventDefault();
        console.log('category id: ', categoryId)
        dispatch({
        type: 'PUT_GIPH',
        payload: { categoryId: categoryId, giphId: 1},
        });
        
        };


    return (

        <div>
            <h1>Favorites Page</h1>
            <p>Choose your favorite Web language:</p>
            <div>
                    {favorites.map((giph) => {
                        return (
                            <div key = {giph.id}> 
                                <img src={giph.image_url} />
                                <form>
                                    <fieldset>
                                        <legend>Pick a category for your gif:</legend>
                                        {categories.map((category) => {
                                            return(

                                                <label key = {category.id}>
                                                    <input 
                                                        type='radio' 
                                                        name='radio' 
                                                        value= {category.name} 
                                                        onChange={(e) => setCategoryId(category.id)}
                                                    /> 
                                                    {category.name}
                                                </label>
                                            )
                                        })}
                                        <button onClick={addCategoryToGiph}>Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        )
                    })}

            <button onClick={searchButton}>Search Giphs</button>

            </div>

        </div>

    )

}

export default FavoritePage;