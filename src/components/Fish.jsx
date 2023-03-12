import {React,useState} from 'react';
import { Select } from 'antd';
import LineChart1 from './LineChart1'
import LineChart2 from './LineChart2'
import LineChart3 from './LineChart3'
import TableA from './TableA';
import TableB from './TableB';
import TableC from './TableC';
import {useNavigate} from 'react-router-dom'




function Fish (){
  const navigate=useNavigate()
  const handleclick=(value)=>{
     navigate(`/${value}`)
  }
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
     <div style={{display:'flex',height:"400px"}}>
        <div style={{width:"1600px"}}>{pond=="Pond A"?<LineChart1 />:(pond=="Pond B"?<LineChart2 />:(pond=="Pond C"?<LineChart3 />:null))}</div>
        <div style={{width:"900px",paddingLeft:"100px"}}>
         <h2>for more details click here</h2>
         

          <div style={{paddingTop:"35px",paddingLeft:"200px",color:"white"}}>
          <button style={{backgroundColor:"blue",color:"white"}} onClick={handleclick} >show more</button>
          </div>
        </div>
     </div>

    
     {pond=="Pond A"?<TableA />:(pond=="Pond B"?<TableB />:(pond=="Pond C"?<TableC />:null))}

    </div>


  
  </div>
)}

export default Fish;
