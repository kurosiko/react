import { DndContext, useDroppable } from "@dnd-kit/core"
import { useRef } from "react"
export const Tool = () =>{
    const h_ref = useRef()

    const a_ref = useRef()
    const v_ref = useRef()
    const g_ref = useRef()
    const o_ref = useRef()

    const def_html = document.createElement("label")
    const space = document.createElement("label")
    space.innerText = " "

    const cmd = ["-x","-f","-o"]
    return(
        <>
            <h1 id="title">GUI for yt-dlp</h1>
            <div id="ydl-check">
                <div id="audio" className="ydl-check">
                    <div>
                        <input type="checkbox" id="only" onChange={(c=this.value)=>{
                            if (c.target.checked){
                                //labelを追加する//+-x --audio-format ~を追加する
                                h_ref.current.appendChild(space)
                                h_ref.current.appendChild()
                            }else{
                                //labelを削除する
                            }
                        }}/>
                        <label>audio</label>
                    </div>
                    <div>
                        <input type="checkbox" id="meta"/>
                        <label>metadata</label></div>
                    <div>
                        <input type="checkbox" id="thumbnail"/>
                        <label>thumbnail</label>
                        </div>
                    <div>
                        <select>
                            <option>auto</option>
                            <option value="acc">acc</option>
                            <option value="flac">flac</option>
                            <option value="mp3">mp3</option>
                            <option value="opus">opus</option>
                            <option value="vorbis">vorbis</option>
                            <option value="wav">wav</option>
                        </select>
                    </div>
                </div>
                <div id="video" className="ydl-check">
                    <div>
                        <select>
                            <option value="mp4">mp4</option>
                            <option value="mkv">mkv</option>
                            <option>webm</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option value="144">144</option>
                            <option value="240">240</option>
                            <option value="360">360</option>
                            <option value="480">480</option>
                            <option value="720">720</option>
                            <option value="1080">1080</option>
                            <option value="bv">best</option>
                        </select>
                    </div>
                </div>
                <div id="folder" className="ydl-check">
                    <div><input type="file" id="directry" ref={(node)=>{
                        ['webkitdirectory', 'directory', 'mozdirectory'].forEach((attr) => {
                            node.setAttribute(attr, '')})}}/></div>
                    <div><input type="checkbox" id="dl"/><label>dl</label></div>
                    <div><input type="checkbox" id="uploader"/><label>uploader</label></div>
                    <div><input type="checkbox" id="f_playlist"/><label>playlist</label></div>
                </div>
                <div id="other" className="ydl-check">
                    <div><input type="checkbox" id="playlist"/><label>playlist</label></div>
                    <div><input type="checkbox" id="notify"/><label>notification</label></div>
                </div>
                <button onClick={()=>{}}>Download</button>
            </div>
            <div ref={h_ref}><label>yt-dlp</label>
                <div ref={a_ref}>
                </div>
                <div ref={v_ref}>
                </div>
                <div ref={g_ref}>
                </div>
                <div ref={o_ref}>
                </div>
            </div>
        </>
    )
}