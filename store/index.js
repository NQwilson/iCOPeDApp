import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import dietReducer from './reducers/dietReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  diet : dietReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;