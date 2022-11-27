import { useEffect, useState } from "react";
import d3, { csv, scaleBand, scaleLinear, max } from 'd3';

const D3 = () => {
    const [ data, setData ] = useState();
    const getWindowWidth = () => {
        const { innerWidth } = window;
        return innerWidth;
    }
    const [ windowWidth, setWindowWidth ] = useState(getWindowWidth());
    const width = 1200;
    const height = 600;
    const margin = { top: 30, right: 10, bottom: 30, left: 30 };
    const innerHeight = (height - margin.top - margin.bottom);
    const innerWidth = (width - margin.right - margin.left);

    useEffect(() => {
        const row = d => {
            d.Population = parseInt(d.Population);
            return d;
        };
        csv('https://gist.githubusercontent.com/urbanobaz/01f2b477fa3e0df8d03c41cc7e47d489/raw/2fd5dd2e55ff028ae02d45140099734c9f50edf2/shenzhenPopulation.csv', row).then(data => {
            window.console.log('Fetching data...');
            setData(data.reverse());
        });
        const handleWindowResize = () => {
            setWindowWidth(getWindowWidth())
        }

        window.addEventListener('resize', handleWindowResize);
    }, []);

    if(!data) {
        return <pre>Loading...</pre>
    }

    const yScale = scaleLinear()
        .domain([0, max(data, d => d.Population)])
        .range([0, innerHeight])

    const xScale = scaleBand()
        .domain(data && data.map(d => d.Year))
        .range([0, innerWidth]);

    const yTicks = yScale.ticks();
    const xDomains = xScale.domain();

    return (
        <>
            <p>Shenzhen Population (1972 - 2022)</p>
            {windowWidth < 1350 && <p>Need screen width to be larger than 1350 to view chart.</p>}
            {windowWidth > 1350 && <svg style={{overflow: 'visible'}} width={width} height={height} alignmentBaseline={0} transform={`translate(50,0)`}>
                <g transform={`translate(${margin.left},${-margin.top})`}>
                    {yTicks.map(tickValue => 
                    <g transform={`translate(-30,${height - yScale(tickValue)})`}>
                        <text style={{textAnchor: 'end', fill: 'grey'}} dx={-20} dy='.35em'>{tickValue}</text>
                        <line
                            x2={width}
                            stroke="lightgrey" />
                    </g>
                    )}
                    {xDomains.map(tickValue => 
                    <g transform={`translate(${xScale(tickValue)},${height + 30})`}>
                        <text style={{fill: 'grey', fontSize: '9px'}}>{tickValue}</text>
                    </g>
                    )}
                    {data.map(d => 
                        <rect
                            fill="#137B80"
                            opacity={.7}
                            stroke="black"
                            strokeWidth="1px"
                            key={xScale(d.Year)}
                            x={xScale(d.Year)}
                            y={height - yScale(d.Population)}
                            width={20}
                            height={yScale(d.Population)}
                        />
                    )}
                </g>
            </svg>}
        </>
    )
}

export default D3;