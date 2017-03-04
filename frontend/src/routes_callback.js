import store from './store';
import { fetchPromotions } from './actions';

export function onPromotionsEnter() {
  store.dispatch(fetchPromotions());
}
