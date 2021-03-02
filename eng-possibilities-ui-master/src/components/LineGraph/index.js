// import React from "react";

// import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export const LineGraph = (props) => {
  const data = props.data.map((value, index) => {
    return {
      "name": `year ${index}`, 
      value
    }
  });
  console.log(data);
  return (
    <>
      <LineChart width={400} height={400} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

// // export default {LineGraph, data};