import {combineReducers} from 'redux';
import productsData from './products';

export default combineReducers({
  productList: productsData,
});
