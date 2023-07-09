import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import Cookies from "js-cookie"
export const Main = ()=>{
    const [count, setCount] = useState(0)
    const [adult, setIsAdult] = useState(false)
    useEffect(()=>{
        const check = Cookies.get("license")
        if (check == undefined){
            setIsAdult(false)
        }
        else if (JSON.parse(check.toLowerCase())){
            setIsAdult(true)
        }else{
            setIsAdult(false)
        }
    },[])
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
                <Link to={"/react/t1"}>toT1</Link>
                <br></br>
                <Link to={"/react/t2"}>toT2</Link>
                <br></br>
                <Link to={"/react/tool"}>toTool</Link>
            </div>
        </div>
        {!adult &&
        <div id="check_r">
            <div id="check_r_main">
                <h3 id="title">WARNING!!</h3>
                <p>このWebページには18歳未満の方には有害な要素が含まれます。</p>
                <p>あなたは18歳以上ですか？</p>
                <div id="button_box">
                    <button id="y" onClick={()=>{
                        Cookies.set("license",true,{expires:30})
                        setIsAdult(true)
                    }}>Yes</button>
                    <button id="n" onClick={()=>{
                        Cookies.set("license",false)
                        let refe = document.referrer
                        if (!refe){
                            refe = "https://www.google.com"
                        }
                        window.location.href = refe
                    }}>No</button>
                </div>
            </div>
        </div>
        }
    </>
    )
}