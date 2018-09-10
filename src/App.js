import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';

const WeatherHeadline = styled.div`
  font-size: 3em;
  font-weight: bold;
  padding: 20px;
`
const AppStyle = styled.div`
  display:flex;
  flex:  0 100%;
  flex-direction: column;
  align-items: center;
`

const App = () => (
    <AppStyle>
        <WeatherHeadline>Väder 18.00 i Lund!</WeatherHeadline>
        <Weather/>
    </AppStyle>
);

export default App;
