import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Day from './Day';
import Graph from './Graph';

const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const WeatherCard = styled.div`
  display: flex;
`

async function setWeatherToState(url) {
  const response = await axios.get(url)
  const wantedObj = response.data.list.filter((time) => time.dt_txt.endsWith('18:00:00'));
  const wantedTemps = wantedObj.map((obj) => (
    obj.main.temp
  ));
  const weatherStatus = wantedObj.map((obj) => (
    obj.weather[0].main
  ));
  this.setState({ temps: wantedTemps, loading: false, status: weatherStatus });
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temps: [],
      loading: true,
      status: []
    }
    this.setWeather = setWeatherToState.bind(this);
  }

  async componentDidMount() {
    await this.setWeather(`http://api.openweathermap.org/data/2.5/forecast?q=Lund,se&units=metric&APPID=aef11d8026de35e63a97cc8412ef1b2f`);
  }

  render() {
    const numDays = 5;
    var days = [];
    for (var i = 0; i < numDays; i++) {
      days.push(
        <Day
          key={i}
          daysToAdd={i}
          temp={this.state.temps[i]}
          statusText={this.state.status[i]} />
      );
    }
    return (
      <WeatherWrapper>
        <WeatherCard>{days}</WeatherCard>
        <Graph series={this.state.temps} />
      </WeatherWrapper>
    );
  }
}

export default Weather;