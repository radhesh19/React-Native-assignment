import { combineReducers } from 'redux';
import debitCardReducer from './debitCard/reducer';

const rootReducer = combineReducers({
    debitCard: debitCardReducer,
});

export default rootReducer;
