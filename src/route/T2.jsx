import { Link } from "react-router-dom"
export const T2 = ()=>{
    return (
    <>
        <h1 id="title">test t2</h1>
        <Link to={"/t1"}>toT1</Link>
        <br></br>
        <Link to={"/"}>to/</Link>
    </>
    )
}
