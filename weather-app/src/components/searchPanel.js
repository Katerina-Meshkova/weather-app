import React, { Component } from 'react';

export class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getWeather(this.state.value);
  };

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input
          className='form__search'
          onChange={this.handleChange}
          placeholder='Введите город'
        />
        <button type='submit' className='form__btn'>
          Search
        </button>
      </form>
    );
  }
}
