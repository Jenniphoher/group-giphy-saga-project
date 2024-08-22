import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';



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