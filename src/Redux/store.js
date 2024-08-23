import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// Reducers
const searchReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_GIPHS':
            return action.payload;
        default:
            return state;
    }
}

const categoriesReducer = (state= [], action) => {

    if(action.type === 'SET_CATEGORIES'){
    
    return action.payload
    
    }
    
    return state
    
    }

function* getCategories() {
    try {
        const response = yield axios.get('/api/categories');
        console.log('Getting categories', response.data);
        yield put({ type: 'SET_CATEGORIES', payload: response.data });
    } catch (err) {
        console.log('error in getting the categories', err);
    }
    }

// Generator functions
function* fetchGiphs(action) {
    console.log('Saga GET action.payload:', action.payload);
    try {
        const giphResponse = yield axios.get(`/api/giphy?q=${action.payload}`);
        console.log('Saga GET for random giphs:', giphResponse.data);

        yield put({
            type: 'SET_GIPHS',
            payload: giphResponse.data
        })
    } catch (error) {
        console.log('Saga error GET random giphs:', error);
    }

}

// 4. Setup Root Saga
function* rootSaga() {
yield takeLatest('FETCH_GIPHS', fetchGiphs)
// yield takeLatest('ADD_FAV', favoriteGiph)
// yield takeLatest('FETCH_FAV_GIPHS', fetchFavGiph)
yield takeLatest('GET_CATEGORIES', getCategories)
// yield takeLatest('PUT_GIF', putGif)

}


// 2. Make instance for Saga
const sagaMiddleware = createSagaMiddleware();

// STORE //
const store = createStore(
    combineReducers({

        searchReducer,
        categoriesReducer

    }),
    // 3. Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
    );


// 5. Initialize Saga
sagaMiddleware.run(rootSaga);


export default store;