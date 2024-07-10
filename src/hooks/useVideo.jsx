import { useContext } from "react";
import { videoContext } from "../context/VideoContext";

export default function useVideo (){
    const {selectedVideo,setSelectedVideo,setOpenForm} = useContext(videoContext);
 
    const selectVideo = (video)=>{
        console.log(video)
        setSelectedVideo(video);
        setOpenForm(true)
    }

    const closeForm = ()=>{
        setSelectedVideo(null)
        setOpenForm(false)
    }
    return {selectedVideo,selectVideo, closeForm}
}