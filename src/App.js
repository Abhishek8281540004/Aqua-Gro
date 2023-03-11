import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Fish from './components/Fish'
import LineChart from './components/LineChart1'

function App() {
  return (
    <div>
      <Routes>
        <Route />
        <Route path='/' element={<Login/>} />
        <Route path='/fish' element={<Fish/>}/>
        <Route path='/chart' element={<LineChart/>}/>

        
      </Routes>
      
    </div>
  )
}

export default App
