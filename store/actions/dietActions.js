import { GET_DIET, SET_DIET_ERROR } from '../types';
import { openweathermap_api_key } from '../../config.json';

export const getDiet = (city, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`);

      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      dispatch({
        type: GET_DIET,
        payload: resData,
      });
      onSuccess();
    } catch (err) {
      dispatch(setError(err.message));
      onError();
    }
  };
};

const setError = (err) => {
  return {
    type: SET_DIET_ERROR,
    payload: err,
  };
};