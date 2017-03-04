import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import promotions from './promotion_reducer';

const rootReducer = combineReducers({
  promotions,
  form
});

export default rootReducer;
