import React from 'react';
import styled from 'styled-components';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { scaleLinear } from '@vx/scale';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
const xDomain = [1, 2, 3, 4, 5];
const yDomain = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const yScale = scaleLinear({
    rangeRound: [400, 0],
    domain: [0, yDomain],
});

const xScale = scaleLinear({
    rangeRound: [0, 400],
    domain: [0, xDomain],
});



const Graph = () => (
    <Wrapper>
        <svg width={"700"} height={"700"}>
            <AxisBottom
                scale={yScale}
                top={400}
                left={120}
                label={'days'}
                tickTextFill={'#1b1a1e'}
            />
            <AxisLeft
                scale={xScale}
                top={0}
                left={120}
                label={'degrees'}
            />
        </svg>
    </Wrapper>
);

export default Graph;
