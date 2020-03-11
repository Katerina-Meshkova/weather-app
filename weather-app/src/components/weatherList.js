import React, { Component } from 'react';
import { Spinner } from './spinner/spinner';
import { ErrorIndicator } from './errorIndicator';

export class WeatherList extends Component {
  render() {
    const { data, error, loading } = this.props;

    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading) ? (
      <WeatherView weatherData={data} />
    ) : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className='weather-block'>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const WeatherView = weatherData => {
  const { main, wind, weather, name } = weatherData.weatherData;

  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className='weather-content'>
      <div className='weather__temp'>
        <img className='weather__temp-icon' src={icon}></img>
        <span className='weather__temp-item'>{main.temp} °C</span>
      </div>
      <ul className='weather__list-group'>
        <h2 className='weather__title'>{name}</h2>
        <li className='list-item'>
          <span className='term'>Влажность </span>
          <span>{main.humidity}%</span>
        </li>
        <li className='list-item'>
          <span className='term'>Максимальная температура </span>
          <span>{main.temp_max} °C</span>
        </li>
        <li className='list-item'>
          <span className='term'>Минимальная температура</span>
          <span>{main.temp_min}°C</span>
        </li>
        <li className='list-item'>
          <span className='term'>Ветер </span>
          <span>{wind.speed} м/с</span>
        </li>
      </ul>
    </div>
  );
};
