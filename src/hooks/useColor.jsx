import { useContext } from "react";
import { videoContext } from "../context/VideoContext";

 export default function useCategoryColor (){
    const {categories} = useContext(videoContext);

    const bringColor = (video)=>{
        const category = categories.find((category) => category.name === video.category);
        return category.backgroundColor;
    }
    return {bringColor}
}
