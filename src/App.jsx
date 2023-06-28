import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id='title'>Test Page By React</h1>
      <div id='main'>
        <div id='link'>
          <h2>kurosiko</h2>
          <a href='https://github.com/kurosiko'>GitHub</a>
          <a href='https://www.youtube.com/channel/UCkbPdwURHuIG63f5ZTj3fjw'>YouTube</a>
          <a href='https://twitter.com/kurosiko'>Twitter</a>
        </div>
        <div id='space'>
          <h2>This is test page for react!</h2>
          <p>
            Original Page ↓<br></br>
            <a href='https://kurosiko.github.io/'>here</a>
          </p>
          <button onClick={()=>setCount((count)=>count+1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
