import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 1400, amt: 1400 },
  { name: "Page C", uv: 600, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 700, pv: 1400, amt: 1400 },
  { name: "Page E", uv: 500, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 700, pv: 1400, amt: 1400 },
  { name: "Page G", uv: 800, pv: 2400, amt: 2400 },
];

export default function IntradayGraph() {
  return (
    <div id="intraday_graph">
      <h2>Intraday PNL Max:3,71,417 | Min:-7416</h2>
      <hr />
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}
