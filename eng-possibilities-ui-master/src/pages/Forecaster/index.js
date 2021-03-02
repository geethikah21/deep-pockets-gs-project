import React, {useState} from "react";
import { LineGraph } from "../../components/LineGraph";

const mock = [11506, 13260, 15428, 17959, 21077, 25041, 29787, 34898, 41382, 48824];

const ForecasterHome = () => {
  const [lineGraphData, setLineGraphData] = useState(mock);
  const fetchForecast = () => {
    // call setLineGraphData on response from fetch
    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));
  };

  return (
    <>
       <div>
          <h3>Investment Forecaster</h3>
          <p>Logic goes here</p>
          <LineGraph data={lineGraphData}/>
        </div>
        
    </>
  );
};

export default ForecasterHome;
