import { useState } from 'react'
import './App.css'
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

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
          <Tabs>
            <TabList>
              <Tab>
                Ex.
              </Tab>
            </TabList>

            <TabPanel>
              <h2>This is test page for react!</h2>
              <p>Original Page ↓
                <br></br>
                <a href='https://kurosiko.github.io/'>here</a>
              </p>
              <button onClick={()=>setCount((count)=>count+1)}>
              count is {count}
              </button>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default App
