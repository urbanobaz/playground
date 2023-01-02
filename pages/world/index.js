import React, { useEffect, useState } from 'react';
import { json, geoEqualEarth, geoPath } from 'd3';
import { feature } from 'topojson';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useData = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        json(jsonUrl).then(topoData => {
            const { countries } = topoData.objects;
            setData(feature(topoData, countries));
        });
    }, []);

    return data;
}

const World = () => {
    const data = useData();
    const width = 960;
    const height = 500;
    console.log(data);
    const projection = geoEqualEarth();
    const path = geoPath(projection);

    if(!data) {
        return <pre>Loading...</pre>
    }

    return (
        <div>
            <p>World</p>
            <svg height={height} width={width}>
                {data.features.map(feature => (
                    <path d={path(feature)} fill="white" key={feature} />
                ))}
            </svg>
        </div>
    );
}

export default World;