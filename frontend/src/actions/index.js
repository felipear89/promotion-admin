import axios from 'axios';
import { hashHistory } from 'react-router';

import {
  CREATE_PROMOTION_ERROR, FETCH_PROMOTION
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function createPromotion(promotion) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/promotions/new`, promotion)
      .then(response => {
        hashHistory.push('/promotions');
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

export function fetchPromotions() {
  return {
    type: FETCH_PROMOTION,
    payload: axios.get(`${ROOT_URL}/promotions`)
  };
}
