import {React,useState} from 'react';
import { Select } from 'antd';
import LineChart1 from './LineChart1'
import LineChart2 from './LineChart2'
import LineChart3 from './LineChart3'
import { Table } from "antd"; 


const dataSource = [
    {
      key: '1',
      Testdate: '12-2-2002',
      PH: 7,
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
        DO:"7"
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








function Fish (){
    const[pond,setPond] = useState(" ");

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setPond(value);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
        
      };

      
    return (
        <div style={{display:"flex",width:"1600px",height:"800px"}}> 
        

        <div style={{width:'150px',height:"800px",backgroundColor:"grey"}}>
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Pond A',
        label: 'Pond A',
      },
      {
        value: 'Pond B',
        label: 'Pond B',
      },
      {
        value: 'Pond C',
        label: 'Pond C',
      },
    ]}
  />
  <div style={{paddingTop:"645px"}}>
    <div style={{paddingLeft:"25px"}}>
  <button style={{color:"white",backgroundColor:"blue",width:"100px",paddingLeft:"10px"}}>Add new</button>
  </div>
  <div style={{paddingTop:"20px",paddingLeft:"25px"}}>
  <button style={{color:"white",backgroundColor:"blue",width:"100px",paddingLeft:"10px"}}>Profile</button>
  
  </div>
  </div>
  </div>
 
  <div style={{width:'1450px',height:"800px"}}>
     <div style={{width:'1450px',height:"400px"}}>


          
            
          
        
            {pond=="Pond A"?<LineChart1 />:(pond=="Pond B"?<LineChart2 />:(pond=="Pond C"?<LineChart3 />:null))}
            
        
        
     </div>

     <div style={{width:'1450px',height:"400px"}}>
     <Table dataSource={dataSource} columns={columns} />;
     </div>


    </div>


  <h1>hii</h1>
  </div>
)}

export default Fish;
