import React from 'react';
import { Line } from '@ant-design/charts';

const LineChart2 = () => {
  // Generating some dummy data
  const myData = [
    { x: 0, y: 0 },
    { x: 5, y: 2 },
    { x: 6, y: 4 },
    { x: 3, y: 11 },
    { x: 8, y: 9 },
    { x: 5, y: 10 },
    { x: 6, y: 30 },
    { x: 7, y: 17 },
    { x: 8, y: 22 },
    { x: 15, y: 44 },
    { x: 10, y: 23 },
    { x: 11, y: 27 },
    { x: 12, y: 32 },
    { x: 13, y: 30 },
    { x: 14, y: 35 },
    { x: 15, y: 17 },
    { x: 10, y: 15 },
  ];

  return (
    <>
      <Line
        data={myData}
        height={500}
        xField="x"
        yField="y"
        point={{ size: 5, shape: 'diamon' }}
        color='blue'
      />
    </>
  );
};

export default LineChart2;