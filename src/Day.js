import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import icons from "./icons";
import styled from "styled-components";

const AroundDiv = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DayStyle = styled.div`
  font-size: 10px;
`
const DegreeStyle = styled.div`
  font-size: 25px;
`
const ImageStyle = styled.img`
  max-width: 18px;
  max-height: 18px;
`

const Day = ({ daysToAdd, temp, statusText }) => (
  <AroundDiv>
    <DegreeStyle>{temp}°</DegreeStyle>
    <ImageStyle alt={statusText} src={icons[statusText]}></ImageStyle>
    <DayStyle>{moment().add(daysToAdd, 'days').format('dddd')}</DayStyle>
  </AroundDiv>
)

Day.propTypes = {
  type: PropTypes.string
};

export default Day;