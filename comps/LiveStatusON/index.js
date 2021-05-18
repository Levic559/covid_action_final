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
    Recovery:3477,
    Case: 2320,
    // TotalCase: 132925,
    Death: 32,
  },
  {
    name: '5/13',
    Recovery:3455,
    Case: 2579,
    // TotalCase: 132925,
    Death: 31,
  },
  {
    name: '5/14',
    Recovery: 3502,
    Case: 2362,
    // TotalCase: 133619,
    Death: 26,
  },
  {
    name: '5/15',
    Recovery: 3063,
    Case: 2584,
    // TotalCase: 134937,
    Death: 24,
  },
  {
    name: '5/16',
    Recovery: 3079,
    Case: 2199,
    // TotalCase: 135542,
    Death: 30,
  },
  {
    name: '5/17',
    Recovery: 2953,
    Case: 2170,
    // TotalCase: 136100,
    Death: 4,
  },
];

export default class LiveStatusON extends PureComponent {
  
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