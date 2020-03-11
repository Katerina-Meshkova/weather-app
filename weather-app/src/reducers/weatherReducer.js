import { GET_WEATHER } from '../actions/weatherAction';
import { GET_WEATHER_FAILURE } from '../actions/weatherAction';
import { GET_WEATHER_REQUEST } from '../actions/weatherAction';

const initialState = {
  data: [],
  error: false,
  loading: false,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false,
      };
    case GET_WEATHER_FAILURE:
      return { ...state, error: action.payload.isAxiosError, loading: false };
    default:
      return state;
  }
};
