import React from 'react';
import { Line } from '@ant-design/charts';

const LineChart3 = () => {
  // Generating some dummy data
  const myData = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 11 },
    { x: 10, y: 20 },
    { x: 5, y: 14 },
    { x: 6, y: 19 },
    { x: 7, y: 17 },
    { x: 8, y: 22 },
    { x: 9, y: 24 },
    { x: 10, y: 23 },
    { x: 11, y: 27 },
    { x: 12, y: 32 },
    { x: 19, y: 36 },
    { x: 14, y: 35 },
    { x: 15, y: 37 },
    { x: 19, y: 40 },
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

export default LineChart3;