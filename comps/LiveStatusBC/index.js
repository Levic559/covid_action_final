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
    Recovery: 742,
    Case: 600,
    // TotalCase: 132925,
    Death: 1,
  },
  {
    name: '5/13',
    Recovery: 786,
    Case: 587,
    // TotalCase: 133619,
    Death: 7,
  },
  {
    name: '5/14',
    Recovery: 643,
    Case: 494,
    // TotalCase: 134341,
    Death: 2,
  },
  {
    name: '5/15',
    Recovery: 0,
    Case: 443,
    // TotalCase: 134937,
    Death: 0,
  },
  {
    name: '5/16',
    Recovery: 0,
    Case: 493,
    // TotalCase: 135542,
    Death: 0,
  },
  {
    name: '5/17',
    Recovery: 1888,
    Case: 424,
    // TotalCase: 136100,
    Death: 14,
  },
];

export default class LiveStatusBC extends PureComponent {
 
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