import React, {useState} from "react";
import { LineGraph } from "../../components/LineGraph";

const mock = [11506, 13260, 15428, 17959, 21077, 25041, 29787, 34898, 41382, 48824];

const ForecasterHome = () => {
  const [lineGraphData, setLineGraphData] = useState(mock);
  const fetchForecast = () => {
    // call setLineGraphData on response from fetch
    fetch('http://example.com/movies.json') // replace this with url for data
    .then(response => response.json())
    .then(data => setLineGraphData(data));
  };

  return (
    <>
        <div>
          <h3>Investment Forecaster</h3>
          <p>This page allows you to customize your investments and view the potential growth of <b>$100,000</b> over a period of <b>10 years</b>.</p>
          <br></br>
          <LineGraph data={lineGraphData}/>
          <br></br>
          <h4>Investment Allocations</h4>
          <br></br>
        </div>
        
    </>
  );
};

export default ForecasterHome;
