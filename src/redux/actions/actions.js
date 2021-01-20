import {
  GET_PRODUCTS_DATA_LIST_BEGIN,
  GET_PRODUCTS_DATA_LIST_SUCCESS,
  GET_PRODUCTS_DATA_LIST_FAILED,
  GET_SORT_PRODUCTS_BEGIN,
  GET_SORT_PRODUCTS_SUCCESS,
  GET_SORT_PRODUCTS_FAILED,
} from '../constant';

export function getProductsBegin() {
  return {
    type: GET_PRODUCTS_DATA_LIST_BEGIN,
    loading: true,
  };
}

export function getProductsSuccess(data) {
  return {
    type: GET_PRODUCTS_DATA_LIST_SUCCESS,
    payload: data,
  };
}
export function getProductsFailed(data) {
  return {
    type: GET_PRODUCTS_DATA_LIST_FAILED,
    payload: data,
  };
}
