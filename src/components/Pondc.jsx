
import React from 'react'
import LineChart3 from './LineChart3'
import TableC from './TableC';
import {useNavigate} from "react-router-dom"
import {Card,Col,Row,Button,Popover} from 'antd'
const { Meta } = Card;


const content = (
    <div>
      <p>ph is high</p>
      
    </div>
  );
  const content2 = (
    <div>
      <p>Temp is normal</p>
      
    </div>
  );
  const content3 = (
    <div>
      <p>Nh3 is normal</p>
      
    </div>
  );
  const content4 = (
    <div>
      <p>DO is normal</p>
      
    </div>
  );

  
function Pondc() {
    const navigate=useNavigate()
    const handleclick=()=>{
        
        navigate('/fish')

    }

   
  return (
    
    <div>
        <div style={{alignItems:"center"}}>
        <Row gutter={16}>
    <Col span={6}>
      <Card style={{backgroundColor:"red"}} title="PH" >
        9
        <br />
        <br />
        <Popover content={content} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Temperature" bordered={false}>
        27
        <br />
        <br />
        <Popover content={content2} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Ammonia" bordered={false}>
        6.3
        <br />
        <br />
        <Popover content={content3} title="Alert" trigger="click">
      <Button>Click me</Button>
    </Popover>
      </Card>
    </Col>
    <Col  span={6}>
      <Card  title="Dissolved oxygen" bordered={false}>
        6.7
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
    <LineChart3/>
    
      </div>
      <div style={{paddingTop:"90px"}}>
        <h1 style={{paddingLeft:"650px",fontFamily:"initial"}}>Test result</h1>
      <TableC />
      </div>
      <div style={{paddingLeft:"600px",paddingTop:"100px"}}>
      <button onClick={handleclick} style={{backgroundColor:"blue",color:"white"}}>Home</button>
      <h1>Product details</h1>
  <Card
   
    style={{ width: 240, }}
    cover={<img  alt="example" src="https://cpimg.tistatic.com/05769409/b/4/RO-High-PH-Cleaning-Chemical.jpg" />}
  >
    
  </Card>
  </div>
      
<div style={{paddingLeft:"650px"}}>
  <Card
   
    style={{ width: 240, }}
    cover={<img  alt="example" src="https://cpimg.tistatic.com/05767072/b/4/Scale-Master-Chemicals.jpg" />}
  >
    
  </Card>
  </div>
  
    </div>
  )
}

export default Pondc

