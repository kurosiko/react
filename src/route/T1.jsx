import { Link } from "react-router-dom"
export const T1 = ()=>{
    return (
    <>
        <h1 id="title">test t1</h1>
        <Link to={"/react/t2"}>toT2</Link>
        <br></br>
        <Link to={"/react"}>to/</Link>
    </>
    )
}