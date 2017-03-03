import axios from 'axios';
import { hashHistory } from 'react-router';

import {
  CREATE_PROMOTION_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function createPromotion(promotion) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/promotions/new`, promotion)
      .then(response => {
        hashHistory.push('/');
      })
      .catch(response => {
          dispatch(createPromotionError(response.message))
        });
  };
}

export function createPromotionError(error) {
  return {
    type: CREATE_PROMOTION_ERROR,
    payload: error
  };
}
