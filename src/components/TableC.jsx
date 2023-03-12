import React from 'react'
import { Table } from "antd"; 



const dataSource = [
    {
      key: '1',
      Testdate: '12-2-2002',
      PH: 9,
      NH3: '0.5',
      Temp:"26",
      DO:"8.9"
    },
    {
        key: '2',
        Testdate: '20-2-2002',
        PH: 7,
        NH3: '0.8',
        Temp:"56",
        DO:"9.9"
    },
    {
        key: '3',
        Testdate: '20-5-2002',
        PH: 9,
        NH3: '0.2',
        Temp:"18",
        DO:"9.9"
    },
    {
      key: '4',
      Testdate: '22-2-2002',
      PH: 9,
      NH3: '0.5',
      Temp:"26",
      DO:"8.9"
    },
    {
        key: '5',
        Testdate: '20-2-2002',
        PH: 7,
        NH3: '0.8',
        Temp:"56",
        DO:"9.9"
    },
    {
        key: '6',
        Testdate: '06-5-2002',
        PH: 9,
        NH3: '0.2',
        Temp:"18",
        DO:"9.9"
    },
  ];
  
  const columns = [
    {
      title: 'Testdate',
      dataIndex: 'Testdate',
      key: 'Testdate',
    },
    {
      title: 'PH',
      dataIndex: 'PH',
      key: 'PH',
    },
    {
      title: 'NH3',
      dataIndex: 'NH3',
      key: 'NH3',
    },
    {
        title: 'Temp',
        dataIndex: 'Temp',
        key: 'Temp',
      },
      {
        title: 'DO',
        dataIndex: 'DO',
        key: 'DO',
      },
  ];



function TableC() {
  return (
    <div>
       <div style={{width:'1450px',height:"400px"}}>
     <Table dataSource={dataSource} columns={columns} />;
     </div>
    </div>
  )
}

export default TableC