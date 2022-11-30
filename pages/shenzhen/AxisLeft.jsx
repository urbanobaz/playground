import styles from './Shenzhen.module.scss';
import { scaleLinear } from 'd3';

const AxisLeft = (height, innerHeight, width) => {
    var yScale = scaleLinear().domain([0, 12000000]).range([0, 540]);

    window.console.log(yScale.ticks());
    const ticks = yScale.ticks();

    return (ticks.map((tickValue) => (
        <g key={tickValue} transform={`translate(-30,${(height - yScale(tickValue))})`}>
            <text style={{ textAnchor: "end", fill: "grey" }} dx={-20} dy=".35em">
                {tickValue}
            </text>
            <line x2={width} stroke="lightgrey" />
        </g>
    )));
}

export default AxisLeft;