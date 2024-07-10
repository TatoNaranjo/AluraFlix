import { createContext, useEffect, useState } from "react";
import { postVideo, search, editVideo, deleteVideo } from "../api/api";

export const videoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [openForm,setOpenForm] = useState(false);
  const [selectedVideo,setSelectedVideo] = useState(null);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Back-End",
      backgroundColor: "#00C86F",
    },
    {
      id: 2,
      name: "Front-End",
      backgroundColor: "#6BD1FF",
    },
    {
      id: 3,
      name: "Innovación y Gestión",
      backgroundColor: "#FFBA05",
    },
  ]);

  // function to make a GET request for the videos
  const getVideos = async () => {
    useEffect(() => {
      search("/videos", setVideos);
    }, ["/videos"]);
  };
  getVideos();

  // function to make a POST request for the videos
  const addVideo = async (video) => {
    postVideo("/videos", video);
  };

  // function to make a PUT request for the videos
  const modifyVideo = async (video) =>{
    editVideo("/videos",video);
  }

  const eraseVideo = async (video) =>{
    deleteVideo("/videos",video)
  }

  return (
    <videoContext.Provider
      value={{
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo,
        openForm,
        setOpenForm,
        categories,
        getVideos,
        addVideo,
        modifyVideo,
        eraseVideo
      }}
    >
      {children}
    </videoContext.Provider>
  );
};

export default VideoContextProvider;
