import {combineReducers} from 'redux';
import {reducer as userReducer} from './video/reducers';

const reducer = combineReducers({
  user: userReducer,
});

export {reducer};
