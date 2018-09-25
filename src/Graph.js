import React from 'react'
import styled from 'styled-components'
import { AxisBottom, AxisLeft } from '@vx/axis'
import { scaleLinear } from '@vx/scale'
import { LinePath } from '@vx/shape'
import { curveBasis } from '@vx/curve'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`

const yScale = scaleLinear({
    rangeRound: [400, 0],
    domain: [5, 1],
});
const xScale = scaleLinear({
    rangeRound: [0, 400],
    domain: [40, 0],
});
const degreeArray = [5, 10, 15, 20, 25, 30, 35, 40];
const series = [10.41, 15.07, 16.52, 9.86, 10.96];


class Graph extends React.Component {
    render() {
        return (
            <Wrapper>
                <svg style={{ paddingLeft: '150px', paddingTop: '50px'}} width={"500"} height={"500"}>
                    <LinePath
                        left={100}
                        data={series}
                        xScale={yScale}
                        yScale={xScale}
                        x={(item, index) => (index +1)}
                        y={degree => degree}
                        curve={curveBasis}
                        stroke={"black"}
                        strokeWidth={2}
                    />
                    <AxisBottom
                        scale={yScale}
                        top={420}
                        label={'days'}
                        tickValues={[1, 2, 3, 4, 5]}
                        stroke="#333333"
                        tickStroke="#333333"
                    />
                    <AxisLeft
                        scale={xScale}
                        top={20}
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
