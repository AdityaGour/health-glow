import {
  GET_PRODUCTS_DATA_LIST_BEGIN,
  GET_PRODUCTS_DATA_LIST_FAILED,
  GET_PRODUCTS_DATA_LIST_SUCCESS,
  GET_SORT_PRODUCTS_BEGIN,
  GET_SORT_PRODUCTS_SUCCESS,
  GET_SORT_PRODUCTS_FAILED,
} from '../constant';

const initialstate = {
  loading: false,
  products: [],
  error: '',
  productDetail: [],
};
const productsData = (state = initialstate, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA_LIST_BEGIN:
      return {...state, loading: true};
    case GET_PRODUCTS_DATA_LIST_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...action.payload.products],
        productDetail: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_DATA_LIST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_SORT_PRODUCTS_BEGIN:
      return {...state, loading: true};
    case GET_SORT_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...action.payload.products],
        productDetail: action.payload,
        loading: false,
      };
    case GET_SORT_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsData;
