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
    name: '5/12',
    Recovery:1925,
    Case: 1558,
    // TotalCase: 132925,
    Death: 9,
  },
  {
    name: '5/13',
    Recovery: 2141,
    Case: 1433,
    // TotalCase: 133619,
    Death: 5,
  },
  {
    name: '5/14',
    Recovery: 1613,
    Case: 1980,
    // TotalCase: 133619,
    Death: 4,
  },
  {
    name: '5/15',
    Recovery: 2072,
    Case: 1195,
    // TotalCase: 134937,
    Death: 3,
  },
  {
    name: '5/16',
    Recovery: 1850,
    Case: 1140,
    // TotalCase: 135542,
    Death: 3,
  },
  {
    name: '5/17',
    Recovery: 1708,
    Case: 721,
    // TotalCase: 136100,
    Death: 5,
  },
];

export default class LiveStatusAB extends PureComponent {
  
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