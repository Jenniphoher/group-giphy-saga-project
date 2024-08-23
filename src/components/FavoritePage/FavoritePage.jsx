import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

// The dispatch function for PUT needs the giph ID
// Do we import { useParams } from "react-router-dom" ???
// Or make another component for the favorite button passing 'giph' as prop


function FavoritePage() {
    const dispatch = useDispatch();
    useEffect (() => getCategories(), []);

    const categories = useSelector(store => store.categoriesReducer);

    const getCategories = () => {
        console.log('in getCategories function in Favorites page')
        dispatch ({type: 'GET_CATEGORIES'})
    }

    return (
        <div>
            <h1>Favorites Page</h1>
            <p>Choose your favorite Web language:</p>

            <form>
                <fieldset>
                    <legend>Pick a category for your gif:</legend>
                    {categories.map((category) => {
                        return(
                            <label><input type='radio' name='radio' value= {category.name} /> {category.name}</label>
                        )
                    })}
                    
                </fieldset>
            </form>
        </div>
    )

}

export default FavoritePage;