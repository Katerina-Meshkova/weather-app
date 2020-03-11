import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchPanel } from './searchPanel';
import { WeatherList } from './weatherList';
import { getWeather } from '../actions/weatherAction';

class App extends Component {
  render() {
    const { getWeatherAction, weather } = this.props;
    return (
      <div className='app'>
        <header className='app-header'>
          <h1 className='app-title'>The Weather App</h1>
        </header>
        <SearchPanel getWeather={getWeatherAction} />
        <WeatherList {...weather} />
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    weather: store.weather,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeatherAction: nameCity => dispatch(getWeather(nameCity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
