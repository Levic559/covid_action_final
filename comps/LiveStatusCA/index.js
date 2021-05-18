import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '5/5',
    Recovery: 7509,
    Case: 6212,
    // TotalCase: 132925,
    Death: 52,
  },
  {
    name: '5/13',
    Recovery: 7780,
    Case: 6619,
    // TotalCase: 133619,
    Death: 60,
  },
  {
    name: '5/14',
    Recovery: 8014,
    Case:6000,
    // TotalCase: 134341,
    Death: 43,
  },
  {
    name: '5/15',
    Recovery: 6748,
    Case: 5710,
    // TotalCase: 134937,
    Death: 40,
  },
  {
    name: '5/16',
    Recovery: 6423,
    Case: 5396,
    // TotalCase: 135542,
    Death: 40,
  },
  {
    name: '5/17',
    Recovery: 8189,
    Case:4586,
    // TotalCase: 136100,
    Death: 35,
  },
];

export default class LiveStatusCA extends PureComponent {
 
  render() {
    return (
      
        <ComposedChart
        
          width={380}
          height={275}
          data={data}
          margin={{
            top: 15,
            right: 15,
            bottom: 15,
            left: 15,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="TotalCase" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="Case" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Recovery" stroke="#ff7300" />
          <Scatter dataKey="Death" fill="red" />
        </ComposedChart>
      
    );
  }
}