/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { csv } from "d3";

export const useData = () => {
  const [data, setData] = useState();

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
  }, []);

  return data;
};
