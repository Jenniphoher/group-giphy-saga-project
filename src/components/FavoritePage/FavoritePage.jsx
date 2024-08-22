import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

// The dispatch function for PUT needs the giph ID
// Do we import { useParams } from "react-router-dom" ???
// Or make another component for the favorite button passing 'giph' as prop


function FavoritePage({ entry }) {
    const giphsList = useSelector((store) => store.categoryReducer);

    useEffect(() => 
        dispatch({
            type: 'GET_GIPHS'
        }), []);

    const getGiphs = () => {
        dispatch({
            type: 'FETCH_FAV_GIPHS',
            payload: 'PAYLOAD'
        })
}

    return 

}

export default FavoritePage;