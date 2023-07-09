import { Link } from "react-router-dom"
export const T1 = ()=>{
    return (
    <>
        <h1 id="title">test t1</h1>
        <Link to={"/t2"}>toT2</Link>
        <br></br>
        <Link to={"/"}>to/</Link>
    </>
    )
}