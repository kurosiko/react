import { DndContext, useDroppable } from "@dnd-kit/core"
export const Tool = () =>{
    return(
        <>
            <h1 id="title">GUI for yt-dlp</h1>
            <div id="ydl-check">
                <div id="audio" className="ydl-check">
                    <div><input type="checkbox" id="only"/><label>audio</label></div>
                    <div><input type="checkbox" id="meta"/><label>metadata</label></div>
                    <div><input type="checkbox" id="thumbnail"/><label>thumbnail</label></div>
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
                    <div><input type="file" id="directry" webkitdirectory multiple/></div>
                    <div><input type="checkbox" id="dl"/><label>dl</label></div>
                    <div><input type="checkbox" id="uploader"/><label>uploader</label></div>
                    <div><input type="checkbox" id="f_playlist"/><label>playlist</label></div>
                </div>
                <div id="other" className="ydl-check">
                    <div><input type="checkbox" id="playlist"/><label>playlist</label></div>
                    <div><input type="checkbox" id="notify"/><label>notification</label></div>
                </div>
            </div>
            <button onClick={()=>{
                //audio
                const c_audio = [...document.querySelector("#audio").querySelectorAll("input")].filter((output,index)=>{
                    return output.checked
                })
                console.log(c_audio)
            }}>Download</button>
        </>
    )
}