import d3, { scaleLinear, max } from "d3";

const AxisLeft = (innerHeight, width, data) => {
  //   const data = useData();
  //   window.console.log(data);
  const yScale = scaleLinear()
    // .domain([0, max(data, (d) => d.Population)])
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerHeight]);

  const ticks = yScale.ticks();

  return ticks.map((tickValue) => (
    <g
      key={tickValue}
      transform={`translate(-30,${innerHeight - yScale(tickValue)})`}
    >
      <text style={{ textAnchor: "end", fill: "grey" }} dx={-20} dy=".35em">
        {tickValue}
      </text>
      <line x2={width} stroke="lightgrey" />
    </g>
  ));
};

export default AxisLeft;
