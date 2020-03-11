import axios from 'axios';

const API_KEY = 'deb8cc52d37b532449db7d4bda6fd4bc';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const getWeather = cityName => {
  return dispatch => {
    dispatch({
      type: GET_WEATHER_REQUEST,
    });

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`;

    axios
      .get(url)
      .then(res => {
        dispatch({
          type: GET_WEATHER,
          payload: res,
        });
      })
      .catch(err => {
        dispatch({
          type: GET_WEATHER_FAILURE,
          payload: err,
        });
      });
  };
};
