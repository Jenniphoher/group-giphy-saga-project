import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// The dispatch function for PUT needs the giph ID
// Do we import { useParams } from "react-router-dom" ???
// Or make another component for the favorite button passing 'giph' as prop


function FavoritePage() {
    const dispatch = useDispatch();
    useEffect (() => getCategories(), []);

    const categories = useSelector(store => store.categoriesReducer);
    const [categoryId, setCategoryId] = useState ('')

    const getCategories = () => {
        console.log('in getCategories function in Favorites page')
        dispatch ({type: 'GET_CATEGORIES'})
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

}

export default FavoritePage;