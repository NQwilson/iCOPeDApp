import { GET_DIET, SET_DIET_ERROR } from '../types';

const initialState = {
  data: null,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DIET:
      return {
        data: action.payload,
        error: '',
      };
    case SET_DIET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};