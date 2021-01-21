/* eslint-disable dot-notation */
/* eslint-disable curly */
import ApiService from '../api';
import {
  GET_PRODUCTS_DATA_LIST_BEGIN,
  GET_PRODUCTS_DATA_LIST_FAILED,
  GET_PRODUCTS_DATA_LIST_SUCCESS,
  GET_SORT_PRODUCTS_BEGIN,
  GET_SORT_PRODUCTS_SUCCESS,
  GET_SORT_PRODUCTS_FAILED,
} from '../constant';

const GET_PRODUCT_URL =
  'search/999?app=web&version=3.0.2&tag=loreal-paris&page=';

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

export function getProductsSortingBegin() {
  return {
    type: GET_SORT_PRODUCTS_BEGIN,
    loading: true,
  };
}

export function getProductsSortingSuccess(data) {
  return {
    type: GET_SORT_PRODUCTS_SUCCESS,
    payload: data,
  };
}
export function getProductsSortingFailed(data) {
  return {
    type: GET_SORT_PRODUCTS_FAILED,
    payload: data,
  };
}

export const getProductsList = (pageCount) => {
  return async (dispatch) => {
    try {
      dispatch(getProductsBegin());
      ApiService.Get(GET_PRODUCT_URL + `${pageCount}:20`)
        .then((response) => {
          console.log('Response', response);
          if (response['data']['message'] === 'Success')
            dispatch(getProductsSuccess(response['data']['data']));
        })
        .catch((err) => {
          dispatch(getProductsFailed(err));
        });
    } catch (err) {
      dispatch(getProductsFailed(err));
    }
  };
};

export function getFilteredProductsList(pageCount, filterPart) {
  return async (dispatch) => {
    try {
      dispatch(getProductsSortingBegin());
      ApiService.Get(GET_PRODUCT_URL + `${pageCount}:20` + filterPart)
        .then((response) => {
          if (response['data']['message'] === 'Success')
            dispatch(getProductsSortingSuccess(response['data']['data']));
        })
        .catch((err) => {
          dispatch(getProductsSortingFailed(err));
        });
    } catch (err) {
      dispatch(getProductsSortingFailed(err));
    }
  };
}
