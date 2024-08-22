import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// * ---------- REDUCERS ---------- * //
// FAVORITE REDUCER //
const favoriteReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SET_FAV_GIPHS':
        return action.payload;
     default: return state;
    }
}

// * ---------- SAGAS ---------- * //
function* fetchFavGiph() {
    try {
        const giphResponse = yield axios.get('/api/favorties')
        console.log('GIPH response:', giphResponse.data);
    
        yield put({
            type: 'SET_FAV_GIPHS',
            payload: giphResponse.data
        })
    } catch (error) {
        console.log('Error fetching GIPH:', error);
    }
}

// 4. Setup Root Saga
function* rootSaga() {
yield takeLatest('FETCH_GIPHS', fetchGiphs)
yield takeLatest('ADD_FAV', favoriteGiph)
yield takeLatest('FETCH_FAV_GIPHS', fetchFavGiph)
yield takeLatest('GET_CATEGORIES', getCategories)
yield takeLatest('PUT_GIF', putGif)

}

// STORE //
const store = createStore(
    combineReducers({
    
    }),
    // 3. Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
    );

// 2. Make instance for Saga
const sagaMiddleware = createSagaMiddleware();
// 5. Initialize Saga
sagaMiddleware.run(rootSaga);

export default store;