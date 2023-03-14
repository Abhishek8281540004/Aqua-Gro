import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate=useNavigate()
  const handleclick=()=>{
      
      navigate('/fish')

  }


  return (
    <div>
      <div style={{paddingLeft:"300px",paddingTop:"250px"}}>
       <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    
   
   

  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" onClick={handleclick}>
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
    </div>
  )
}

export default Login

