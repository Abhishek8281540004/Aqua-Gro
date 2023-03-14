import React from 'react'
import { Card, Col, Row } from 'antd';


function Show() {
  return (
    <div>
     <Row gutter={16}>
    <Col  span={8}>
     <a href="/Pond A"> <Card title="Pond A" bordered={false}>
        
      </Card></a>
    </Col>
    <Col span={8}>
      <a href="/Pond B"><Card title="Pond B" bordered={false}>
        
      </Card></a>
    </Col>
    <Col span={8}>
     <a href="/Pond C"> <Card title="Pond C" bordered={false}>
        
      </Card></a>
    </Col>
  </Row>
    </div>

  )
}

export default Show
