import { CREATE_PROMOTION_ERROR, FETCH_PROMOTION } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_PROMOTION_ERROR:
      return { ...state, error: action.payload };
    case FETCH_PROMOTION:
      return { ...state, list: action.payload.data };
    default:
      return state;
  }
}
