import React from "react";

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Label } from "recharts";

const currYear = 2021

export const LineGraph = (props) => {
  const data = props.data.map((value, index) => {
    return {
      "name": `${currYear + index}`, 
      value
    }
  });

  return (
    <>
      <LineChart width={1600} height={400} data={data} margin={{ top: 0, right: 5, bottom: 35, left: 25 }}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name">
          <Label value="Year" offset={15} position="bottom"/>
        </XAxis>
        <YAxis label={{value: "Value ($)", offset: 10, angle: -90, position: "left"}} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </>
  );
};