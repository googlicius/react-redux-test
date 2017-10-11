import { combineReducers } from 'redux';
import history from './history';
import router from './router';

const rootReducer = combineReducers({
    history,
    router
});

export default rootReducer;