
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'


import {Main} from "./route/Main"
import {T1} from "./route/T1"
import {T2} from "./route/T2"
import { Expect } from './route/Expect'
import {Tool} from "./route/Tool"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/react/*' element={<Expect/>}/>
        <Route path="/react/" element={<Main/>}/>
        <Route path="/react/t1" element={<T1/>}/>
        <Route path="/react/t2" element={<T2/>}/>
        <Route path='/react/tool' element={<Tool/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
