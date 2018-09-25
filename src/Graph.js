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

const xScale = scaleLinear({
    rangeRound: [400, 0],
    domain: [5, 1],
});
const yScale = scaleLinear({
    rangeRound: [0, 800],
    domain: [40, -20],
});
const degreeArray = [-20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40];


const Graph = ( {series} ) => (
    <Wrapper>
        <svg style={{ paddingLeft: '100px', paddingTop: '50px' }} width={"450"} height={"1000"}>
            <LinePath
                data={series}
                xScale={xScale}
                yScale={yScale}
                x={(item, index) => (index + 1)}
                y={degree => degree}
                curve={curveBasis}
                stroke={"black"}
                strokeWidth={2}
            />
            <AxisBottom
                scale={xScale}
                top={530}
                label={'days'}
                tickValues={[1, 2, 3, 4, 5]}
                stroke="#333333"
                tickStroke="#333333"
            />
            <AxisLeft
                scale={yScale}
                label={'degrees'}
                tickValues={degreeArray}
                stroke="#333333"
                tickStroke="#333333"
            />
        </svg>
    </Wrapper>
);

export default Graph;
