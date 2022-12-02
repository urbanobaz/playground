import { useEffect, useState } from "react";
import { scaleBand, scaleLinear, max, csv } from "d3";
import styles from "./Shenzhen.module.scss";
import AxisBottom from "./AxisBottom";
import { useData } from "./useData";

const D3 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth | 0);
  const data = useData();
  const width = 1200;
  const height = 600;
  const margin = { top: 30, right: 10, bottom: 30, left: 30 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
  }, [data]);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yScale = scaleLinear()
    .domain([0, max(data, (data) => data.Population)])
    .range([0, innerHeight]);

  const xScale = scaleBand()
    .domain(data && data.map((d) => d.Year))
    .range([0, innerWidth]);

  const yTicks = yScale.ticks();
  const xDomains = xScale.domain();

  return (
    <>
      {windowWidth < 1350 ? (
        <p className={styles.bigText}>
          Need screen width to be larger than 1350 pixels to view data
        </p>
      ) : (
        <p className={styles.bigText}>Shenzhen Population (1972 - 2022)</p>
      )}
      {windowWidth > 1350 && (
        <svg
          style={{ overflow: "visible" }}
          width={width}
          height={height}
          alignmentBaseline={0}
          transform={`translate(50,0)`}
        >
          <g transform={`translate(${margin.left},${-margin.top})`}>
            {yTicks.map((tickValue) => (
              <g
                key={tickValue}
                transform={`translate(-30,${height - yScale(tickValue)})`}
              >
                <text
                  style={{ textAnchor: "end", fill: "grey" }}
                  dx={-20}
                  dy=".35em"
                >
                  {tickValue.toLocaleString('en-US')}
                </text>
                <line x2={width} stroke="lightgrey" />
              </g>
            ))}
            <AxisBottom xDomains={xDomains} height={height} xScale={xScale} />
            {data.map((d) => (
              <rect
                fill="#137B80"
                opacity={0.8}
                stroke="black"
                strokeWidth="1px"
                key={xScale(d.Year)}
                x={xScale(d.Year)}
                y={height - yScale(d.Population)}
                width={15}
                height={yScale(d.Population)}
              />
            ))}
          </g>
        </svg>
      )}
    </>
  );
};

export default D3;
