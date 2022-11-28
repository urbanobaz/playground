/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { csv, scaleBand, scaleLinear, max } from "d3";
import styles from "./Shenzhen.module.scss";

const D3 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth | 0);
  const [data, setData] = useState();
  const width = 1200;
  const height = 600;
  const margin = { top: 30, right: 10, bottom: 30, left: 30 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  useEffect(() => {
    const row = (d) => {
      d.Population = parseInt(d.Population);
      return d;
    };
    csv(
      "https://gist.githubusercontent.com/urbanobaz/01f2b477fa3e0df8d03c41cc7e47d489/raw/2fd5dd2e55ff028ae02d45140099734c9f50edf2/shenzhenPopulation.csv",
      row
    ).then((data) => {
      window.console.log("Fetching data...");
      setData(data.reverse());
    });

    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
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
                  {tickValue}
                </text>
                <line x2={width} stroke="lightgrey" />
              </g>
            ))}
            {xDomains.map((tickValue) => (
              <g
                key={tickValue}
                transform={`translate(${xScale(tickValue)},${height + 30})`}
              >
                <text style={{ fill: "grey", fontSize: "9px" }}>
                  {tickValue}
                </text>
              </g>
            ))}
            {data.map((d) => (
              <rect
                fill="#137B80"
                opacity={0.7}
                stroke="black"
                strokeWidth="1px"
                key={xScale(d.Year)}
                x={xScale(d.Year)}
                y={height - yScale(d.Population)}
                width={20}
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
