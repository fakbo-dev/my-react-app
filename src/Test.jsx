import { useEffect, useRef, useState } from "react";
import VideoPlay from "./VideoPlay";



function Test() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);


    function handleButton() {
        setIsPlaying((i) => !i);
    }
    return (
        <>
            <button onClick={handleButton}>{isPlaying ? "Reproducir" : "pausar"}</button>
            <VideoPlay
                ref={videoRef}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                width={250} loop />
        </>
    )
}

export default Test