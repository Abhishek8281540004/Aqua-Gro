import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Fish from './components/Fish'
import LineChart from './components/LineChart1'
import Ponda from './components/Ponda'
import Pondb from './components/Pondb'
import Pondc from './components/Pondc'

function App() {
  return (
    <div>
      <Routes>
        <Route />
        <Route path='/' element={<Login/>} />
        <Route path='/fish' element={<Fish/>}/>
        <Route path='/chart' element={<LineChart/>}/>
        <Route path='/Pond A' element={<Ponda/>}/>
        <Route path='/Pond B' element={<Pondb/>}/>
        <Route path='/Pond C' element={<Pondc/>}/>

        
      </Routes>
      
    </div>
  )
}

export default App
