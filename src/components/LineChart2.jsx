import { Line } from '@ant-design/charts';

const LineChart1 = () => {
  // Generating some dummy data
  const myData = [
    { x: 0, y: 0,category:'pH' },
    { x: 1, y: 2,category:'Temp' },
    { x: 3, y: 4,category:'NH3' },
    { x: 7, y: 11,category:'DO' },
    { x: 11, y: 9,category:'pH' },
    { x: 15, y: 14 ,category:'Temp'},
    { x: 11, y: 19,category:'NH3' },
    { x: 12, y: 17,category:'DO' },
    { x: 10, y: 22,category:'pH' },
    { x: 19, y: 24,category:'Temp' },
    { x: 11, y: 23,category:'NH3' },
    { x: 12, y: 27,category:'DO' },
    { x: 12, y: 30,category:'pH' },
    { x: 13, y: 30,category:'Temp' },
    { x: 14, y: 25,category:'NH3' },
    { x: 15, y: 31,category:'DO' },
    { x: 16, y: 30,category:'pH' },
  ];


  

  return (
    <>
      <Line
        data={myData}
        height={300}
        xField="x"
        yField="y"
        seriesField='category'
        point={{ size: 5, shape: 'diamond' }}
        color={["blue","green","red","yellow"]}
      />
    </>
    //
  );
};

export default LineChart1;



