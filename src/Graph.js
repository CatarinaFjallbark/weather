import React from 'react';
import styled from 'styled-components';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { scaleLinear } from '@vx/scale';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const yScale = scaleLinear({
    rangeRound: [400, 0],
    domain: [5, 0],
});
const xScale = scaleLinear({
    rangeRound: [0, 400],
    domain: [40, 0],
});
const degreeArray = [5, 10, 15, 20, 25, 30, 35, 40];
class Graph extends React.Component {
    render() {
        return (
            <Wrapper>
                <svg width={"700"} height={"700"}>
                    <AxisBottom
                        scale={yScale}
                        top={420}
                        left={100}
                        label={'days'}
                        tickValues={[1, 2, 3, 4, 5]}
                        stroke="#333333"
                        tickStroke="#333333"
                    />
                    <AxisLeft
                        scale={xScale}
                        top={20}
                        left={100}
                        label={'degrees'}
                        tickValues={degreeArray}
                        stroke="#333333"
                        tickStroke="#333333"
                    />
                </svg>
            </Wrapper>
        );
    }
}

export default Graph;
