import React, {useState} from "react";
import { LineGraph } from "../../components/LineGraph";
import DataTable from '../../components/Table/datatable'

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
          <LineGraph data={lineGraphData}/>
          <DataTable/>
        </div>
        
    </>
  );
};

export default ForecasterHome;
