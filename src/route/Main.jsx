import { Link } from "react-router-dom"
import { useState } from "react"
export const Main = ()=>{
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
                <p>Original Page ↓
                <br></br>
                <a href='https://kurosiko.github.io/'>here</a>
                </p>
                <button onClick={()=>setCount((count)=>count+1)}>
                    count is {count}
                </button>
                <Link to={"/t1"}>toT1</Link>
                <br></br>
                <Link to={"/t2"}>toT2</Link>
                <br></br>
                <Link to={"/tool"}>toTool</Link>
            </div>
        </div>
    </>
    )
}