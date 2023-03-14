
import React from 'react'
import {useNavigate} from 'react-router-dom'
import LineChart2 from './LineChart2'
import TableB from './TableB';
import {Card,Col,Row,Button,Popover} from 'antd'
const { Meta } = Card;


const content = (
    <div>
      <p>pH is normal</p>
      
    </div>
  );
  const content2 = (
    <div>
      <p>Temperature is high</p>
      
    </div>
  );
  const content3 = (
    <div>
      <p>NH3 is normal</p>
      
    </div>
  );
  const content4 = (
    <div>
      <p>DO is normal</p>
      
    </div>
  );


function Pondb() {
    const navigate=useNavigate()
    const handleclick=()=>{
        
        navigate('/fish')
    }
  return (
    <div>
        <div >
        <Row gutter={16}>
    <Col span={6}>

      <Card  title="PH" >
        6.8
        <br />
        <br />
        <Popover content={content} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
     
    </Col>
    <Col span={6}>
      <Card  style={{backgroundColor:"red"}}  title="Temperature" bordered={false}>
        30.81
        <br />
        <br />
        <Popover content={content2} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Ammonia" bordered={false}>
        6.9
        <br />
        <br />
        <Popover content={content3} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Dissolved oxygen" bordered={false}>
        7.1
        <br />
        <br />
        <Popover content={content4} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
  </Row>
        
      <div>
        <h1 style={{paddingLeft:"650px",fontFamily:"initial"}}>Analytics</h1>
    <LineChart2/>
      </div>
      <div style={{paddingTop:"90px"}}>
        <h1 style={{paddingLeft:"650px",fontFamily:"initial"}}>Test result</h1>
      <TableB />
      </div>
    </div>
    <div style={{paddingLeft:"600px",paddingTop:"100px"}}>
    <Button onClick={handleclick} style={{backgroundColor:"blue",color:"white"}}>Home</Button>
    <h1>Product details</h1>
  <Card
   
    style={{ width: 240, }}
    cover={<img  alt="" />}
  >
    
  </Card>
  </div>
      
<div style={{paddingLeft:"600px"}}>
  <Card
   
    style={{ width: 240, }}
    cover={<img  alt="example" src="" />}
  >
    
  </Card>
  </div>
    </div>
  )
}

export default Pondb