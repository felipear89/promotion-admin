import { CREATE_PROMOTION_ERROR } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_PROMOTION_ERROR:
      return { ...state, error: action.payload};
    default:
      return state;
  }
}
