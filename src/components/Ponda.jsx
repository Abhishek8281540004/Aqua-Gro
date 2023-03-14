import React from 'react'
import LineChart1 from './LineChart1'
import TableA from './TableA';
import {Card,Col,Row,Button,Popover} from 'antd'
import {useNavigate} from 'react-router-dom'
const { Meta } = Card;

const content = (
    <div>
      <p>PH is normal</p>
    </div>
  );
  const content2 = (
    <div>
      <p>Temperature is normal</p>
    </div>
  );
  const content3 = (
    <div>
      <p>Dissolve oxygen content  is high</p>
    </div>
  );
  const content4 = (
    <div>
      <p>Ammnoia is high </p>
    </div>
  );


function Ponda() {
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
        7.9
        <br />
        <br />
        <Popover content={content} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
     
    </Col>
    <Col span={6}>
      <Card title="Temperature" bordered={false}>
        25.9
        <br />
        <br />
        <Popover content={content2} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Ammonia" bordered={false}>
        5.1
        <br />
        <br />
        <Popover content={content3} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
    <Col span={6}>
      <Card  style={{backgroundColor:"red"}} title="Dissolved oxygen" bordered={false}>
        6.8
        <br />
        <br />
        <Popover content={content4} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
  </Row>
        </div>
      <div>
        <h1 style={{paddingLeft:"650px",fontFamily:"initial"}}>Analytics</h1>
    <LineChart1/>
      </div>
      <div style={{paddingTop:"90px"}}>
        <h1 style={{paddingLeft:"650px",fontFamily:"initial"}}>Test result</h1>
      <TableA />
      </div>
      <div style={{paddingLeft:"600px",paddingTop:"100px"}}>
      <Button onClick={handleclick} style={{backgroundColor:"blue",color:"white"}}>Home</Button>
        <h1>Product details</h1>
  <Card
   
    style={{ width: 240, }}
    cover={<img  alt="example" src="https://3.imimg.com/data3/JS/JC/MY-2977799/cooling-water-system-500x500.gif" />}
  >
    
  </Card>
  </div>
      
<div style={{paddingLeft:"600px"}}>
  <Card
   
    style={{ width: 240, }}
    cover={<img  alt="example" src="https://4.imimg.com/data4/QH/IG/MY-4704692/water-probiotics-500x500.jpg" />}
  >
    
  </Card>
  </div>
      </div>
    
  )
}

export default Ponda
