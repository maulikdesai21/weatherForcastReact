import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weatherList'

export default class App extends Component {
  render() {
    return (
      <div className="height80 backgroundwhite margintop80">
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}
