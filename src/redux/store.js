import { createStore, combineReducers} from 'redux';
import coordinates from './reducers/coordinates';
import temperature from './reducers/temperature';

const reducer = combineReducers({ coordinates, temperature });

const store = createStore(reducer);
window.store = store;
export default store;